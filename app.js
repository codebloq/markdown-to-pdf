const express = require("express");
const markdownpdf = require("markdown-pdf");

const app = express();

app.get("/", function (req, res) {
  res.send("This is a simple Markdown to PDF convertor.");
});

markdownpdf()
  // Path to origin file
  .from("./origin-md/demo_file.md")
  // Path to destination file
  .to("./destination-pdf/doc1.pdf", function () {
    console.log("Successfully converted file to .pdf");
  });

app.listen(3000, function () {
  console.log("Server started on Port: 3000");
});
