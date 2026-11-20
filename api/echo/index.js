// Echo endpoint for security research (Sentinel egress-proxy testing).
// Classic Functions model (v3 bindings) for maximum compatibility with
// Static Web Apps managed functions. Returns exactly what it received —
// method, url, headers, query, body — as JSON. Stateless: nothing is
// logged or stored; the caller only ever sees its own request.
module.exports = async function (context, req) {
  const headers = req.headers || {};

  let body = null;
  if (Buffer.isBuffer(req.body)) {
    body = req.body.toString('utf8');
  } else if (req.body !== undefined && req.body !== null) {
    body = typeof req.body === 'object' ? JSON.stringify(req.body) : String(req.body);
  }

  context.res = {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    },
    body: JSON.stringify({
      echo: true,
      receivedAt: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl,
      headers: headers,
      query: req.query || {},
      body: body
    })
  };
};
