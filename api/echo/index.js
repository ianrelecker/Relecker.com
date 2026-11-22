// Allowlisted canary endpoint for Sentinel egress-proxy security testing.
// Returns only explicitly approved test fields; never reflects infrastructure
// headers, authorization material, cookies, or the full original URL.
// Stateless: requests are not logged or stored by this function.

const SAFE_HEADERS = new Set([
  'x-echo-token',
  'x-echo-token-2',
  'x-echo-alt',
  'x-canary',
  'content-type'
]);

const SAFE_QUERY = new Set(['t2', 'canary']);
const MAX_BODY_LENGTH = 4096;

module.exports = async function (context, req) {
  const incomingHeaders = req.headers || {};
  const headers = {};

  for (const [name, value] of Object.entries(incomingHeaders)) {
    const lowerName = name.toLowerCase();
    if (SAFE_HEADERS.has(lowerName)) {
      headers[lowerName] = value;
    }
  }

  const query = {};
  for (const [name, value] of Object.entries(req.query || {})) {
    if (SAFE_QUERY.has(name.toLowerCase())) {
      query[name] = value;
    }
  }

  let body = null;
  if (Buffer.isBuffer(req.body)) {
    body = req.body.toString('utf8');
  } else if (req.body !== undefined && req.body !== null) {
    body = typeof req.body === 'object'
      ? JSON.stringify(req.body)
      : String(req.body);
  }

  if (body && body.length > MAX_BODY_LENGTH) {
    body = body.slice(0, MAX_BODY_LENGTH) + '…[truncated]';
  }

  context.res = {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff'
    },
    body: JSON.stringify({
      echo: true,
      receivedAt: new Date().toISOString(),
      method: req.method,
      path: '/api/echo',
      headers,
      query,
      body
    })
  };
};
