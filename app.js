const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res, next) => {
	res.json(`Hello from OS: ${os.hostname}`);
});

app.listen(3000, () => console.log("server running on port 3000"));
