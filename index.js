const { putIcon } = require('./put-icon');
const { deleteIcon } = require('./delete-icon');
const timestamp = "1613537066815";

/* * /
// save icon 
const imageUrl = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=450";
putIcon(imageUrl);
// */

/** /
// update icon
const imageUrl = "https://s.gravatar.com/avatar/2c76114522b1f756a8e0cbc527710628?s=450";
putIcon(imageUrl, timestamp);
// */

/**/
// delete icon
deleteIcon(`u/${timestamp}`);
// */