const modelRecords = require ('../model//Records')

const myStatus = [{desc:"success", number:200},{desc:"error", number:500}]

//ENDPOINTS

module.exports = {};

function sendMessage(res, status, message){
    res.status(status.number).send({ status: status.desc, message });
};