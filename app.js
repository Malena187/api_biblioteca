const express= require ("express");
const app = express();
app.use(express.json());

//importamos el router de libros
const librosRouter = require ("./routes/libros");

//importamos el middleware error Handler
const errorHandler = require ("./middleware/errorHandler");

app.use("/libros", librosRouter);
app.use (errorHandler);
app.listen(4080,()=>{
    console.log("Servidor iniciado en el puerto 4080")
});

