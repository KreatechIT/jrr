const next = require('next');
const http = require('http');

// Passenger doesn't set NODE_ENV, so default to production and only run the
// dev server when explicitly asked (NODE_ENV=development).
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => {
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});