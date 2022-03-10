const express = require("express");
const app = express();

app.listen(3000 || process.env.PORT, () => {
  console.log("Application started and Listening on port 3000");
});


// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/advertiser", (req, res) => {
  res.sendFile(__dirname + "/advertiser.html");
});