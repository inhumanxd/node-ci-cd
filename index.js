const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Yo! Wassup, Mate!");
});

// Run Server
const port = process.env.PORT || 3000;
try {
  if (process.env.NODE_ENV_MODE != "test")
    app.listen(port, () => console.log(`Server is running on port: ${port}`));
} catch {
  console.log("Couldn't kickstart the server.");
}

module.exports = app;

