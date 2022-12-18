const fs = require('fs');

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 30,
};

const handleWriteFile = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('everything was a success');
  }
};

fs.writeFile('./output.txt', JSON.stringify(myObject), handleWriteFile);
