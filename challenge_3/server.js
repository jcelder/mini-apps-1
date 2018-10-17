var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('client'));
app.use(express.json());

app.listen(port, (error) => {
  if (error) {
    console.error('Something went wrong\n', error);
  } else {
    console.log(`Express server listening on localhost:${port}/`)
  }
})

