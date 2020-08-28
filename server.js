const express = require('express');

const app = express();
const port = 8081;
app.use(express.static(`${__dirname}/build`));

app.get('*', function (request, response) {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
