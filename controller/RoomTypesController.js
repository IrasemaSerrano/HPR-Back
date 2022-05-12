const modelRoomTypes = require ('../model/RoomTypes')

const myStatus = [{desc:"success", number:200},{desc:"error", number:500}]

//ENDPOINTS
// Endpoint: findAll
const findAll = (req, res) => { 
    modelRoomTypes.find({}, (err, arr) => {  
        if (err) {                   
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], arr);
        };
    });
};

// Endpoint: findID
const findID = (req, res) => {
    modelRoomTypes.find({}, (err, arr) => {
        if (err) {
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], arr);
        };
    });
};

// Endpoint: create 
const addNew = (req, res) => {
    const dataRoomType = req.body; 

    /**const newRoom = modelRoomTypes({floor: dataRoom.floor, room: dataRoom.room,
        status: {enum: {values: dataRoom.values, message: dataRoom,message}} }); */

    newRoom.save((err, rm) => { 
        if (err) {
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], rm); 
        }
    });
};

module.exports = {findAll, findID, addNew};

function sendMessage(res, status, message){
    res.status(status.number).send({ status: status.desc, message });
};