const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;
app.listen(port, () => {
  console.log(`escuchando el servidor: http://localhost:${port}`);
});

const staticServerPath = './public';
app.use(express.static(staticServerPath));
