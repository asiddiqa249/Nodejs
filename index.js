const { log } = require("console");
// var a = 10;
// function hello() {
//   return "hello";
// }
// module.exports.a = hello();

var http = require("http");
let url = require("url");
// let util = require("util");
let fs = require("fs");
http
  .createServer((req, res) => {
    let parsedUrl = url.parse(req.url);
    // if (parsedUrl.pathname == "/register") {
    //   console.log(req.url);
    //   console.log(parsedUrl);
    //   console.log(req.method);
    //   // This is one method to parse
    //   //   let regObj = { profile: "Registered" };
    //   //   let reg = util.inspect(regObj);
    //   //   res.write(reg);
    //   // 2nd method to parse
    //   res.write(JSON.stringify({ profile: "Successfully registered" }));
    //   res.end();
    // } else if (parsedUrl.pathname == "/login") {
    //   console.log(req.url);

    //   //   let logObj = { profile: "logged In" };
    //   //   let login = util.inspect(logObj);
    //   //   res.write(login);
    //   res.write(JSON.stringify({ profile: "Successfully loggedIn" }));
    //   res.end();
    // } else {
    //   res.write("Wrong Credentials");
    //   res.end();
    // }
    // let obj = { hi: "Ayesha" };
    // let string = util.inspect(obj);
    // res.write(string);
    // res.end();
    if (parsedUrl.pathname == "/register" && req.method == "GET") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.write(err);
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
    } else {
      res.write("wrong url");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("hi server");
  });
