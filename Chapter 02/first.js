console.log("This is first line")

const fs = require('fs');
fs.writeFile('output.txt',"Writing a file using node js",(error)=>{
  if(error){
    console.error("Error occurred while writing file");
  }else{
    console.log("File written successfully");
  }
})