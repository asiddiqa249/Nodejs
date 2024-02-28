let http = require("http");
let url = require("url");
let fs = require("fs");
http
  .createServer((req, res) => {
    let parsedUrl = url.parse(req.url);
    if (parsedUrl.pathname == "/register" && req.method == "GET") {
      fs.appendFile("./index.html", "<h1>hello World</h1>", (err) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("hello morning");
          res.end();
        }
      });
    }
  })
  .listen(3010, () => {
    console.log("new port 3010 is executing");
  });
