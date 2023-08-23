const { minify } = require("terser");
var myfs = require("myfs");

/*
# run

cd /Volumes/Drives/projects/uuidv5
node ./build.js

*/

var src = myfs.open("uuidv5.js");

async function run(){
    var min = await minify(src);
    myfs.save("uuidv5.min.js", min.code);
}

run();

console.log("DONE");