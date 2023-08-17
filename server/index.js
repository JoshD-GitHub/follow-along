const express = require("express");
const app = express();
const PORT = 3005;



app.get('/', (req, res) => {
	res.send("hello world");
});



app.listen(PORT, () => {
  console.log(`SEVER IS RUNNING AND LISTENING ON PORT ${PORT}`);
});
