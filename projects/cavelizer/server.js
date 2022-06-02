import chalk from 'chalk';
const PORT = 3333;

/* Pure Javascript (without express) */
import http from 'http';
import url from 'url';

const app = function (request, response) {
  const path = url.parse(request.url, true).pathname;
  console.log(path);

  if (request.method === 'GET') {
    // path-uri care au metoda GET
    if (path === '/recodenized') {
      response.writeHead(200);
      response.end('Ai ajuns pe reCODEnized');
    } else {
      response.end(404);
    }
  } else if (request.method === 'POST') {
    // path-uri care au metoda POST
  } else if (request.method === 'PATCH') {
    // path-uri care au metoda PATCH
  } else if (request.method === 'PUT') {
    // path-uri care au metoda PUT
  } else if (request.method === 'DELETE') {
    // path-uri care au metoda DELETE
  } else {
    response.end(404);
  }
};

const server = http.createServer(app);

server.listen(PORT, function () {
  console.log(chalk.bgBlue('Server started: '), chalk.blue(`Listening to port ${PORT}`));
});

/*  With express */
// import express from 'express';

// const app = express();

// app.get('/recodenized', function (req, res) {
//   res.writeHead(200);
//   res.end('Ai ajuns pe reCODEnized');
// });

// app.get('*', function (req, res) {
//   res.end(404);
// });

// app.listen(PORT, function () {
//   console.log(chalk.bgBlue('Server started: '), chalk.blue(`Listening to port ${PORT}`));
// });
