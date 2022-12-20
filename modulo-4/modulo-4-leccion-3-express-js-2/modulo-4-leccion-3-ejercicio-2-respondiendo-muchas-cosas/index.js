const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get('/response-a', (req, res) => {
  res.json({
    result: 'ok',
  });
});

app.get('/response-b', (req, res) => {
  const htmlCode = '<h1>Esta es una página de prueba</h1>';
  res.send(htmlCode);
});

app.get('/response-c', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber % 2) {
    res.redirect('https://www.youtube.com/');
  } else {
    res.redirect('https://www.instagram.com/');
  }
});

app.get('/response-d', (req, res) => {
  if (req.query.user === '1' || req.query.user === '2') {
    res.json({
      result: 'ok',
    });
  } else {
    res.status(404).json({ result: 'error: invalid query param' });
  }
});
