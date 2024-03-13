let http = require("http");
let url = require("url");
http
  .createServer((req, res) => {
    let parseUrl = url.parse(req.url);
    if (parseUrl.pathname == "/register" && req.method == "GET") {
      res.write("Hello Server");
      res.end();
    } else if (parseUrl.pathname == "/login" && req.method == "POST") {
      var body = "";
      req.on("data", (chunk) => {
        console.log(chunk);
        body += chunk.toString();
      });
      req.on("end", () => {
        console.log(body);
        res.write("hello end server");
        res.end();
      });
    }
  })
  .listen(3004, () => {
    console.log("Hello data");
  });
