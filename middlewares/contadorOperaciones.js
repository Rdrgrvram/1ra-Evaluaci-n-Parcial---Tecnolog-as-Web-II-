
let totalOperaciones = 0;

const contadorOperaciones = (req, res, next) => {
    totalOperaciones++;
    req.totalOperaciones = totalOperaciones;
    next();
};

module.exports = contadorOperaciones;
