const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/services/:name', (req, res) => {
  const serviceName = req.params.name;
  res.render('service', { serviceName });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});