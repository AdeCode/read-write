const fs = require("fs");
const https = require("http");

//create the result directory path
var result = './result';

//check if directory already exists
if (!fs.existsSync(result)){
    fs.mkdirSync(result);
    const file = fs.createWriteStream("./result/posts.txt");
    https.get('http://jsonplaceholder.typicode.com/posts', response => {
        var stream = response.pipe(file);
        stream.on("finish", function(){
            console.log('file written successfully');
        });
    });
}
