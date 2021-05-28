const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");

const app = express();

const PORT = process.env.PORT || 5000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Abdur Razack",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Abdur Razack",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Abdur Razack",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.status(404).send({
      error: "Please provide address",
    });
  }
  forecast(address, (error, forecastData) => {
    if (error) {
      return res.status(404).send({
        error: `Unable to retrieve weather for given location. ${error}`,
      });
    }
    res.status(200).send({
      data: forecastData,
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Abdur Razack",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Abdur Razack",
    errorMessage: "Page not found.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
