const {v4:uuid} = require("uuid");
const path = require("path");
const fs = require("fs");

const inputs = path.join(__dirname,"pInps");

if(!fs.existsSync(inputs)){
    fs.mkdirSync(inputs);
}

const generatePInpFile = async(inp)=>{
    const jobId = uuid();
    const inpPFileName = `${jobId}.txt`;
    const inpPFile = path.join(inputs,inpPFileName);
    await fs.writeFileSync(inpPFile,inp);
    return inpPFile;
};

module.exports = {
    generatePInpFile
};