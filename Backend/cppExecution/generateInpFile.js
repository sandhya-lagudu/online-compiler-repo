const {v4:uuid} = require('uuid');
const path = require("path");
const fs = require('fs');

const inpCodeDir = path.join(__dirname,'inputs');

if(!fs.existsSync(inpCodeDir)){
    fs.mkdirSync(inpCodeDir,{recursive:true});
}

const generateInpFile = async(inp)=>{
    const jobId = uuid();
    const inpFileName = `${jobId}.txt`;
    const inpFilePath = path.join(inpCodeDir,inpFileName);
    await fs.writeFileSync(inpFilePath,inp);
    return inpFilePath;
};

module.exports = {
    generateInpFile
};