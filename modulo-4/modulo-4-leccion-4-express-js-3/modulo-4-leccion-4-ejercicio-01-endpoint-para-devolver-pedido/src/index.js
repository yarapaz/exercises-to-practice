const express = require('express');
const cors = require('cors');

//Config and init express
const app = express();
app.use(express.json());
app.use(cors());

//Create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

//EndPoints
app.get('/users/:userId/orders/:orderId', (req, res) => {
  console.log(req.params);
});
