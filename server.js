const express = require("express");
const path = require("path");

const app = express();

//Middleware
app.use("/static", express.static(path.resolve("static")));



app.get('/*', (req, res) => {
    let path = req.params.path;
    if (isValidPath(path))
      res.sendFile(path);
  });

app.listen(process.env.PORT || 3000, () =>{
    console.log("Up & Running...");
});

