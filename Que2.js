const fs = require('fs');

const content = "Node.js File System Working!";

fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File created and text written successfully!');
});
