const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
// const hireme = require("./routes/hireme");
// const weather = require("./routes/weather");
// const meraki = require("./routes/meraki");
const port = 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/"));
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/hireme", (req, res) => {
//   res.render("hireme", { reply: "" });
// });
// app.post("/hireme", hireme.sendmail);
// app.post("/meraki", meraki.sendmail);
// app.get("/meraki", (req, res) => {
//   res.render("getmail", {
//     reply: "ENter list of all emails seprated by comma",
//   });
// });
// app.get("/components", (req, res) => {
//   res.render("components");
// });
// app.get("/sitemap", (req, res) => {
//   res.sendFile("sitemap");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("/weather", weather.getweat);
//404 function
app.use(function (req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.render("404", { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
