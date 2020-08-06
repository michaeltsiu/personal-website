const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

module.exports = app;