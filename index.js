// const app = require("express")();
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`The API is ready on http://localhost:${PORT}`)
);

// function getTShirt(req, res) {
//   return res.status(200).send({
//     tshirt: "Nike",
//     size: "Small",
//   });
// }

// app.get("/tshirt", getTShirt);

// GET endpoint
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "Nike",
    size: "Xl",
  });
});

//Post endpoint
app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({ tshirt: `TShirt with your ${logo} and ID of ${id}` });
});
