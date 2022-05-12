const modelQuestions = require ('../model/Questions')

const myStatus = [{desc:"success", number:200},{desc:"error", number:500}]
  
//aquí van los endpoints

module.exports = {};

function sendMessage(res, status, message){
    res.status(status.number).send({ status: status.desc, message });
};