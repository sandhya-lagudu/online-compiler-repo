const {exec} = require("child_process");
const path = require("path");
const fs = require('fs');

const executeP = async(pFilePath,pInputFilePath)=>{
    return new Promise((resolve,reject)=>{
        exec(`python3 ${pFilePath} < ${pInputFilePath}`,(error,stdout,stderr)=>{
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
    executeP
};