const express = require("express");
const app = express();

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// define /about route
app.get("/about", (req, res) => {
    res.send("Welcome to the About Page!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
