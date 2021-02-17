# s3.lab

Object storage built to store and retrieve any amount of data from anywhere

---

## Checklist

- public S3 Bucket called `icons.avatarbox.io`

## Usage

There are two methods:
1. `putIcon(imageUrl, timestamp)`
2. `deleteIcon(key)`

The `putIcon` method is used to both Save and Update S3 images.

## Save

```js
// save icon 
const imageUrl = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=450";
putIcon(imageUrl);
```

After save (and/or update), the image url from the console output will resemble `https://icons.avatarbox.io/u/1613432690190`.

## Update

```js
// update icon
const imageUrl = "https://s.gravatar.com/avatar/2c76114522b1f756a8e0cbc527710628?s=450";
const timestamp = "1613432690190";
putIcon(imageUrl, timestamp);
```

After update,

Do this:

`https://icons.avatarbox.io/u/1613432690190?v=1`

Not this:

`https://icons.avatarbox.io/u/1613432690190`

CloudFront caches the S3 images for a moment, so after update you must rely on [Cache Busting](https://www.keycdn.com/support/what-is-cache-busting) to force down the latest image.

## Delete

```js
// delete icon
const key = "u/1613432690190";
deleteIcon(key);
```

After delete, the image is removed from S3, but still cached in CloudFront, as mentioned previously.

[MIT](https://github.com/mrtillman/aws-update-gravatar/blob/main/LICENSE)