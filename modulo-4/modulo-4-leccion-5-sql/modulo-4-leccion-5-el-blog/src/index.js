const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database2.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

//api endpoints

app.get('/books/:bookId/categories', (req, res) => {
  const bookId = req.params.bookId;
  const query = db.prepare(
    'SELECT * FROM books, MainCategories, SecondaryCategories, books_secondaryCategories WHERE books.fkMainCategory = MainCategories.id AND books.id = books_secondaryCategories.fkBooks AND SecondaryCategories.id = books_secondaryCategories.fkSecondaryCategories AND books.id = ?'
  );
  const book = query.get(bookId);
  res.json(book);
});

//Tested
app.get('/books/:bookId/categories', (req, res) => {
  const bookId = req.params.bookId;
  console.log(bookId);
  const query = db.prepare(
    'SELECT * FROM books, categories WHERE books.fkCategories = categories.id AND books.id = ?'
  );
  const book = query.get(bookId);
  res.json(book);
});

app.patch('/books', (req, res) => {
  const newStock = req.body.newStock;
  console.log(newStock);

  const query = db.prepare('UPDATE books SET stock = ? WHERE ebook = false');
  const result = query.run(newStock);
  res.json(result);
});

//tested
app.get('/books', (req, res) => {
  const page = parseInt(req.query.page);

  if (page === 1) {
    const query = db.prepare(`SELECT * FROM books ORDER BY name ASC LIMIT 3 `);
    const books = query.all();
    res.json(books);
  } else if (page === 2) {
    const query = db.prepare(
      `SELECT * FROM books LIMIT 3 OFFSET 4 ORDER BY name ASC`
    );
    const books = query.all();
    res.json(books);
  }
});

//tested
app.get('/books', (req, res) => {
  const bookId = req.query.id;
  const query = db.prepare(`SELECT * FROM books WHERE id = ?`);
  const book = query.get(bookId);
  res.json(book);
});

//tested
app.get('/books', (req, res) => {
  const stock = parseInt(req.query.stock);
  const ebook = req.query.ebook;
  console.log(stock);
  console.log(ebook);

  if (stock > 0 && ebook === 'true') {
    const query = db.prepare(
      `SELECT * FROM books WHERE stock > 0 AND ebook = true`
    );
    const books = query.all();
    res.json(books);
  } else {
    res.json({ success: false, message: 'No hay libros en stock' });
  }
});

//tested
app.get('/books', (req, res) => {
  const stock = parseInt(req.query.stock);
  if (stock > 0) {
    const query = db.prepare(`SELECT * FROM books WHERE stock > 0`);
    const books = query.all();
    res.json(books);
  } else {
    res.json({ success: false, message: 'No hay libros en stock' });
  }
});

//tested
app.get('/books', (req, res) => {
  const price = parseInt(req.query.price);
  console.log(price);
  if (price > 5) {
    const query = db.prepare(`SELECT * FROM books WHERE price > 5`);
    const books = query.all();
    res.json(books);
  } else {
    res.json({ success: false, message: 'No hay libros por debajo de 5€' });
  }
});

//tested
app.get('/books', (req, res) => {
  const priceOrder = req.query.priceOrder;
  if (priceOrder === 'asc') {
    const query = db.prepare(`SELECT * FROM books ORDER BY price ASC`);
    const books = query.all();
    res.json(books);
  } else {
    const query = db.prepare(`SELECT * FROM books ORDER BY price DESC`);
    const books = query.all();
    res.json(books);
  }
});

//tested
app.get('/books', (req, res) => {
  const query = db.prepare(`SELECT * FROM books`);
  const books = query.all();
  res.json(books);
});

app.post('/books', (req, res) => {
  const newBook = req.body;

  if (req.body.name && req.body.author) {
    const query = db.prepare(
      'INSERT INTO books (name, author, summary, price, stock, ebook) VALUES (?, ?, ?,?,?,?)'
    );
    const result = query.run(
      newBook.name,
      newBook.author,
      newBook.summary,
      newBook.price,
      newBook.stock,
      newBook.e - book
    );
    res.json(result);
  } else {
    res.json({
      error: 'Invalid input data',
    });
  }
});

app.delete('/books/deleteAll', (req, res) => {
  const query = db.prepare(
    'UPDATE books SET name = ? WHERE ebook = false AND stock = 0'
  );
  const result = query.run(newTitle, bookId);
  res.json(result);
});

app.delete('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;

  const query = db.prepare('DELETE FROM books WHERE id = ? ');
  const result = query.run(bookId);
  res.json(result);
});

app.patch('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  const newTitle = req.body.newTitle;

  const query = db.prepare('UPDATE books SET name = ? WHERE id = ? ');
  const result = query.run(newTitle, bookId);
  res.json(result);
});

app.put('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  const newBookInfo = req.body;

  const query = db.prepare(
    'UPDATE books SET name = ?, author = ?, summary = ?, price = ?, stock = ?, ebook = ? WHERE id = ?'
  );
  const result = query.run(
    newBookInfo.name,
    newBookInfo.author,
    newBookInfo.summary,
    newBookInfo.price,
    newBookInfo.stock,
    newBookInfo.e - book,
    bookId
  );
  res.json(result);
});
