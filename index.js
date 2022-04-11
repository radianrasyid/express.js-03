const express = require("express");
const { json } = require("express/lib/response");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded())
app.use(express.json())
app.set('view engine', 'ejs');

const BOOK_MSG = `
Terima kasih sudah
menambahkan buku
di dalam database kami.
`


// GET /api/v1/books?author=Fikri
// app.get("/api/v1/books", (req, res) => {
//   console.log(req.query)
//   res
//     .status(200)
//     .send(`Kamu sedang mencari buku yang ditulis oleh ${req.query.author}`);
// });

// GET /api/v1/books/1
// app.get("/api/v1/books/:id", (req, res) => {
//   console.log(req.params)
//   res
//     .status(200)
//     .send(`Kamu sedang mencari buku dengan id ${req.params.id}`);
// });

app.get("/", (req, res)=>{
  res.render('index', {
    name: req.query.name='radian' || 'Guest'
  })
})

app.get('/books', (req, res) => {
  console.log(req.query);
  res.status(200).send(`List Books with name : ${req.query.name}`)
})

app.get('/books/:id', (req, res) => {
  console.log(req.params);
  res.status(200).send(`List Books with id : ${req.params.id}`)
})

app.post('/api/v1/books', (req, res) => {
  console.log(req.body);
  res.status(201).send(BOOK_MSG)
})

// POST /api/v1/books
// app.post("/api/v1/books", (req, res) => {
//   console.log(req.body)
//   res
//     .status(201)
//     .send("Terima kasih sudah menambahkan buku di dalam database kami");
// });

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
