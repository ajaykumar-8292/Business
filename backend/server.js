const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to WebNest IT Solutions - Backend API is Live!");
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

  res.json({
    message: "Message sent successfully!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});