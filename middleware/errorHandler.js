const errorHandler = (err, req, res, next) => {
//verifica si el error tiene un codigo de stado definido, sino se establece uno
    const statusCode = err.statusCode || 500;

//construye un objeto de respuesta al error
    const errorResponse={
        error: {
            message: err.message || "Error interno del servidor",
            code: err.code || "internal_error"
        },
    };
    //envia respuesta de error en formato JSON  
    res.status(statusCode).json(errorResponse);
}

module.exports= errorHandler;