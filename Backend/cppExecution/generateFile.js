const {v4:uuid} = require('uuid');
const path = require("path");
const fs = require('fs');

const cppCodeDir = path.join(__dirname,'cppCodes');

if(!fs.existsSync(cppCodeDir)){
    fs.mkdirSync(cppCodeDir,{recursive:true});
}

const generateFile = async(lang,sol)=>{
    const jobId = uuid();
    const fileName = `${jobId}.${lang}`;
    const filePath = path.join(cppCodeDir,fileName);
    await fs.writeFileSync(filePath,sol);
    return filePath;
};

module.exports = {
    generateFile
};