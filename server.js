const express = require("express");
const path = require("path");

const app = express();

//Middleware
app.use("/static", express.static(path.resolve("static")));

 app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
}); 

/* app.get('/*', (req, res) => {
    let path = req.params.path;
    if (isValidPath(""))
      res.sendFile("");
  }); */

app.listen(process.env.PORT || 3000, () =>{
    console.log("Up & Running...");
});

