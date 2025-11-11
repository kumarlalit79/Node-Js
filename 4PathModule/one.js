import path from 'path'

// const fullPath = path.join('/path' , 'index.py' , 'file.java')
// console.log(fullPath);

// const absolutePath = path.resolve()
// console.log("Currently we are working on - " , absolutePath);

const extensionName = path.extname("image.pdf")
console.log(extensionName);
if (extensionName == ".pdf") {
    console.log("Ok");
    
}
else{
    console.log("Not ok");
    
}
