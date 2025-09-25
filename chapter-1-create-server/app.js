const http = require('http');

//? first way to create server
// function requestListener(req,res){
//     console.log(req);
// }
// const server = http.createServer(requestListener);

//? second way to create server
// const server = http.createServer(function requestListener(req,res){
//     console.log(req);
// });

// //? Third way to create server
// const server = http.createServer((req,res)=>{
//  console.log(req.url , req.method , req.header );
// process.exit();  to exit event loop
// });

// const PORT = 3000;
// server.listen(PORT,()=>{
//     console.log(`server running on http://localhost:${PORT}`)
// });


console.log("Mihir Patel");

const mihir = {
    name: "mihir",
    number : 1,
    from : "gujarat"
}

let fileData = JSON.stringify(mihir);
// console.log(fileData);

const fs = require('fs');
fs.writeFile("output.txt", fileData,(err)=>{
    if(err) console.log("Error occured");
    else console.log("Writing file successfully");
})

fs.readFile("output.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});
