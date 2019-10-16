const express = require('express');

const app = express();

app.use(express.json());
app.get("/", (request, response, next) => {
  console.log(request.body);
  response
    .status(200)
    .send({
      "msg": "success"
    });
});

app.listen(3000);