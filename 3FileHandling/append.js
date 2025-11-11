import { appendFile } from "fs/promises";

const append_file = async (fileName , content) => {
    await appendFile(fileName,content);
    console.log("Updated successfully");
}   
append_file("sample.txt" , "new line of content added")