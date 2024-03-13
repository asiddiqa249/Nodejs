let http = require("http");
let url = require("url");
let fs = require("fs");
http
  .createServer((req, res) => {
    let parseUrl = url.parse(req.url);
    // console.log("praser log:", parseUrl.query);
    if (parseUrl.pathname == "/register" && req.method == "GET") {
      let queryParams = parseUrl.query;
      console.log(queryParams);
      let splt = queryParams.split("&");
      console.log(splt);
      let object = {};
      splt.map((val) => {
        let [key, value] = val.split("=");
        object[key] = value;
      });
      console.log("object log", object);
      // let parseObj = JSON.stringify(object);
      // console.log("parsed object", parseObj);
      // console.log(parseUrl.query);
      fs.writeFile("./index.json", JSON.stringify(object), (err) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write("Data visible");
          res.end();
        }
      });
    } else if (parseUrl.pathname == "/login" && req.method == "POST") {
      let queryParameter = parseUrl.search;
      console.log(queryParameter);
      fs.writeFile(
        "./index.txt",
        queryParameter,
        (err, data = queryParameter) => {
          if (err) {
            res.write(err);
            res.end();
          } else {
            res.write(data);
            res.end();
          }
        }
      );
    }
  })
  .listen(3015, () => {
    console.log("Hello query params");
  });
