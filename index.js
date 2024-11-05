const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (queryObject.url) {
    const redirectUrl = queryObject.url;

    if (isValidUrl(redirectUrl)) {
      res.writeHead(302, { Location: redirectUrl });
      res.end();
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid URL.');
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('No URL provided.');
  }
});

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
