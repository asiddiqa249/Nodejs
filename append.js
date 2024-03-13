let http = require("http");
let url = require("url");
let fs = require("fs");
http
  .createServer((req, res) => {
    let requiredUrl = url.parse(req.url, true);
    console.log(requiredUrl);
    // if (requiredUrl.pathname == "/append" && req.method == "GET") {
    //   fs.appendFile("./index.html", "data appended", (err) => {
    //     if (err) {
    //       res.write(err);
    //       res.end();
    //     } else {
    //       res.write("data received");
    //       res.end();
    //     }
    //   });
    // }
    if (requiredUrl.pathname == "/rename" && req.method == "GET") {
      fs.rename("./index1.txt", "index54.txt", (err) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("renamed the file");
          res.end();
        }
      });
    }
  })
  .listen(3003, () => {
    console.log("appended the file");
  });
