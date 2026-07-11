const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method,)

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Lrarning Node js</title></head>');
    res.write('<body><h1>Hello Guys! How you doing..?</h1></body>');
    res.write("<form action='/message' method='POST'>");
    res.write("<input type='text' name='username' placeholder='Enter your username'> <br>");
    res.write("<label for='gender'>Male</label>");
    res.write("<input type='radio' id='male' name='gender' value='male'>  <br>");
    res.write("<label for='female'>Female</label>");
    res.write("<input type='radio' id='female' name='gender' value='female'>  <br>");
    res.write("<input type='text' name='message' placeholder='Enter your message'>");
    res.write("<button type='submit'>Send</button>");
    res.write("</form>");

    res.write('</html>');
    res.end();
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Lrarning Node js</title></head>');
    res.write('<body><h1>About Us Page</h1></body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/message' && req.method === 'POST') {

    const body = [];
    req.on('data', chunk => {
      console.log(chunk)
      body.push(chunk);
    })
    req.on('end', () => {
      const message = Buffer.concat(body).toString();
      console.log(message);
      const params = new URLSearchParams(message);
      const objectBody = {};
      for (const [key, val] of params.entries()) {
        objectBody[key] = val;
        console.log(objectBody)
      }
      // write the parsed message to a file (as JSON)
      fs.writeFileSync('message.txt', JSON.stringify(objectBody));
      res.statusCode = 302; // Set status code for redirection
      res.setHeader('Location', '/'); // Redirect to home page
      res.end();
    });

  }

});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});