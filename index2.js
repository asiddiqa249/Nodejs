let http = require("http");
let url = require("url");
let fs = require("fs");
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
        fs.writeFile("./index1.txt", body, (err, data = body) => {
          if (err) {
            res.write(err);
            res.end();
          } else {
            res.write(data);
            res.end();
          }
          // console.log(err);
          // res.write("hello");
          // res.end();
        });
        res.write("hello end server");
        res.end();
      });
    }
  })
  .listen(3004, () => {
    console.log("Hello data");
  });
