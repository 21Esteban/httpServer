const { createServer } = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
  console.log(response);
});
server.listen(8000);
console.log("Listening! (port 8000)");

// If you run this script on your own machine, you can point your web browser at http://localhost:8000/hello to make a request to your server. It will respond with a small HTML page.

// The function passed as argument to createServer is called every time a client connects to the server. The request and response bindings are objects representing the incoming and outgoing data. The first contains information about the request, such as its url property, which tells us to what URL the request was made.

// So, when you open that page in your browser, it sends a request to your own computer. This causes the server function to run and send back a response, which you can then see in the browser.

// To send something back, you call methods on the response object. The first, writeHead, will write out the response headers (see Chapter 18). You give it the status code (200 for “OK” in this case) and an object that contains header values. The example sets the Content-Type header to inform the client that we’ll be sending back an HTML document.
