const {exec} = require("child_process");
const path = require("path");
const fs = require("fs");


const outputPath = path.join(__dirname,'outputs');
if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive:true});
}

const executeCpp = (filePath,inputFilePath)=>{
    const jobId=path.basename(filePath).split(".")[0];
    const outFile = path.join(outputPath,`${jobId}.out`);
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filePath} -o ${outFile} && cd ${outputPath} && ./${jobId}.out < ${inputFilePath}`,(error,stdout,stderr)=>{
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
    executeCpp
};