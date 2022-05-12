const modelSurveys = require ('../model/Users')

const myStatus = [{desc:"success", number:200},{desc:"error", number:500}]

//AQUÍ VAN LOS ENDPOINTS

module.exports = {/*Mandar endpoints*/};

function sendMessage(res, status, message){
    res.status(status.number).send({ status: status.desc, message });
}; 