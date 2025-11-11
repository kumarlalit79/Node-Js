import {readFile} from 'fs/promises'

const read_file = async (fileName) => {
    const data = await readFile(fileName , 'utf-8');
    console.log(data);
}
read_file('sample.txt')