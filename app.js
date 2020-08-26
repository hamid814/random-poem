const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// handlebars
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/', require('./routes/poets'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
