const {v4:uuid} = require('uuid');
const path = require('path');
const fs = require('fs');

const cCodesPath=path.join(__dirname,"cCodes");

if(!fs.existsSync(cCodesPath)){
    fs.mkdirSync(cCodesPath,{recursive:true});
}

const generateCFile = async(lang,code)=>{
    const jobId=uuid();
    const cFileName=`${jobId}.${lang}`;
    const fp=path.join(cCodesPath,cFileName);
    await fs.writeFileSync(fp,code);
    return fp;
};

module.exports = {
    generateCFile
};