const { app } = require('@azure/functions');

// Echo endpoint for security research (Sentinel egress-proxy testing).
// Returns exactly what it received — method, url, headers, query, body —
// as JSON. Stateless: nothing is logged or stored; the caller only ever
// sees its own request.
app.http('echo', {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    let rawBody = null;
    try {
      const buf = await request.arrayBuffer();
      rawBody = buf && buf.byteLength > 0 ? Buffer.from(buf).toString('utf8') : null;
    } catch (_) {
      rawBody = null;
    }

    const headers = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff'
      },
      body: JSON.stringify({
        echo: true,
        receivedAt: new Date().toISOString(),
        method: request.method,
        url: request.url,
        headers: headers,
        query: Object.fromEntries(request.query),
        body: rawBody
      })
    };
  }
});
