// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
// https://github.com/aws/aws-sdk-php/issues/72

const https = require("https");

const { 
  S3Client, 
  PutObjectCommand
} = require("@aws-sdk/client-s3");

module.exports.putIcon = function putIcon(imageUrl, key){

  const _key = key ? key : (new Date()).getTime().toString();

  console.log("put icon: ", _key);

  https.request(imageUrl, async response => {
    const client = new S3Client({
      region: "us-east-1",
    });
    
    const contentLength = response.headers["content-length"];
    const contentType = response.headers["content-type"];
    const ext = contentType.split('/').pop();

    const command = new PutObjectCommand({
      Bucket: "icons.avatarbox.io",
      ACL: "public-read",
      Key: `u/${_key}.${ext}`,
      ContentType: contentType,
      ContentLength: contentLength,
      Body: response
    })

    console.log(`https://icons.avatarbox.io/u/${_key}.${ext}`);

    const result = await client.send(command);

    //console.log(result);

  }).end();

  
}