// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
// https://github.com/aws/aws-sdk-php/issues/72

const https = require("https");

const { 
  S3Client, 
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const imageUrl = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=450";
//const imageUrl = "https://en.gravatar.com/userimage/150849239/d83bae7ec0e25069af6f3a006ecbf289.png?size=450";

https.request(imageUrl, async response => {
  const client = new S3Client({
    region: "us-east-1",
  });
  
  const contentLength = response.headers["content-length"];
  const contentType = response.headers["content-type"];
  const ext = contentType.split('/').pop();

  const key = "1613369738141"//(new Date()).getTime().toString();

  const command = new PutObjectCommand({
    Bucket: "icons.avatarbox.io",
    ACL: "public-read",
    Key: `u/${key}.${ext}`,
    ContentType: contentType,
    ContentLength: contentLength,
    CacheControl: "max-age=0",
    Body: response
  })

  const result = await client.send(command);

  console.log(result);

}).end();
