const {v4:uuid} = require("uuid");
const path = require("path");
const fs = require("fs");

const inpF = path.join(__dirname,"inputs");

if(!fs.existsSync(inpF)){
    fs.mkdirSync(inpF,{recursive:true});
}

const generateCInpFile = async(inp)=>{
    const jobId = uuid();
    const inpFName = `${jobId}.txt`;
    const inpPath = path.join(inpF,inpFName);
    await fs.writeFileSync(inpPath,inp);
    return inpPath;
};

module.exports = {
    generateCInpFile
};