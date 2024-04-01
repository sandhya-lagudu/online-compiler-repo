const {exec} = require("child_process");
const path = require("path");
const fs = require("fs");
const { stderr } = require("process");

const outputP = path.join(__dirname,'outputs');
if(!fs.existsSync(outputP)){
    fs.mkdirSync(outputP,{recursive:true});
}

const executeC = async(cFilePath,cInputFilePath)=>{
    const jobId = path.basename(cFilePath).split(".")[0];
    const outputFile = path.join(outputP,`${jobId}.out`);
    return new Promise((resolve,reject)=>{
        exec(`gcc ${cFilePath} -o ${outputFile} && cd ${outputP} && ./${jobId}.out < ${cInputFilePath}`,(error,stdout,stderr)=>{
            if(error){
                reject({error,stderr});
            }
            if(stderr){
                reject(stderr);
            }
            resolve(stdout);
        });
    });
};

module.exports = {
    executeC
};