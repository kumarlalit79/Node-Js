import { writeFile } from "fs/promises";

const write_file = async (fileName , content) => {
    await writeFile(fileName,content);
    console.log("File create successfully");
}
write_file('ai.py' , 'this is a python file');