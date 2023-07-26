//requerir los paquetes
const express = require("express");
const app = express();
 
const path = require("path");


//poner a escuchar el servidor
app.listen(4600, () => console.log("servidor corriendo"))

//

//ruta
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})