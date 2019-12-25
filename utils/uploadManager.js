'use strict';


const fs = require('fs');
const AWSConf = require("./AwsConfig");


class AwsS3Bucket extends AWSConf{
    constructor(bucketName) {
        super()
        this.s3 = new this.AWS.S3();
        this.bucketName = bucketName
        this.bucketUrl = process.env.S3_BUCKET_URL
    }

    getFilesizeInBytes(filename){
        let stats = fs.statSync(filename);
        return stats["size"];
    }

    async UploadFile(files, originalName){
        try{

            const buffer = fs.readFileSync(files)
            let params = {
                Bucket: this.bucketName,
                Key: originalName,
                Body: buffer,
                ACL: 'public-read',
                ContentLength: this.getFilesizeInBytes(files),
            };
            const that = this;
            function upload() {
                return new Promise((resolve, reject) => {
                    that.s3.upload(params, (error, success) => {
                        if(error)
                            reject(error)
                        else
                            resolve(success)
                    });
                })
            }
            return await upload()
        }catch(error){
            throw(error)
        }
    }
}


module.exports = AwsS3Bucket