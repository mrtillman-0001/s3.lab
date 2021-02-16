// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property

const { 
  S3Client, 
  DeleteObjectCommand
} = require("@aws-sdk/client-s3");

module.exports.deleteIcon = async function deleteIcon(key){
  
  if(!key) return;

  const client = new S3Client({
    region: "us-east-1",
  });

  const command = new DeleteObjectCommand({
    Bucket: "icons.avatarbox.io",
    Key: key
  })

  const result = await client.send(command);

  console.log(result);

}