let qry = "hello=everyone&hi=oneAndAll";
let splt = qry.split("&");
console.log(splt);
let obj={}
splt.map((val) => {
    console.log(val.split("="))
    var [key, value] = val.split("=")
    console.log(key);
    console.log(value);
    obj[key] = value;
})
    console.log(obj);
