import express from "express";
const { PORT } = process.env;
const app = express();

app.set("port", PORT || 8927);

app.get("/", (req, res, next) => {
  res.send("hi there");
});

const server = app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${server.address().port}`);
});
