const {v4:uuid} = require("uuid");
const path = require("path");
const fs = require("fs");

const pyFiles = path.join(__dirname,"pyFiles");

if(!fs.existsSync(pyFiles)){
    fs.mkdirSync(pyFiles,{recursive:true});
}

const generatePFile = async(lang,code)=>{
    const jobId = uuid();
    const pyFile = `${jobId}.${lang}`;
    const pyFilePath = path.join(pyFiles,pyFile);
    await fs.writeFileSync(pyFilePath,code);
    return pyFilePath;
};

module.exports = {
    generatePFile
};