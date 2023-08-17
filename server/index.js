const express = require("express");
const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
	res.send("hello world");
});

app.use('/api', require("./api"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`SERVER IS UP AND RUNNING AND LISTENING ON PORT ${PORT}`);
  } else {
    console.log(`SOMETHING WENT WRONG`);
  }
});