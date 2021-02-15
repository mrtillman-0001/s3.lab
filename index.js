const https = require("https");
const fs = require("fs");

const fileStream = fs.createWriteStream("avatar.jpg");

const imageUrl = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg";

const request = https.request(imageUrl, response => {
  response.pipe(fileStream);
})

request.end();
