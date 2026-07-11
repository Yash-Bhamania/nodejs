if(req.url === '/'){ res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Lrarning Node js</title></head>');
  res.write('<body><h1>Hello Guys! How you doing..?</h1></body>');
  res.write("<form action='/message' method='POST'>");
    res.write("<input type='radio' name='gender' value='male'> Male <br>");
    res.write("<input type='radio' name='gender' value='female'> Female <br>"); 
    res.write("<input type='text' name='message'>");
    res.write("<button type='submit'>Send</button>");
    res.write("</form>");

  res.write('</html>');
  res.end();   }