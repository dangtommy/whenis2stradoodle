// Node.js + Express server backend for whenis2stradoodle
const express = require('express');
const app = express();

// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
// sub-directory, and the server will serve them from there. e.g.,:
app.use(express.static('static_files'));

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});