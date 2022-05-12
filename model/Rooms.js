const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({

    //id

    //id(roomTypes)

    floor: { 
        type: String,
        required: [true, 'Floor required']
    },

    room: {
        type: String,
        required: [true, 'Room name required']
    },

    status: {
        type: String,
        enum: {
            values: ['Available','Suspend'], 
            message: '{VALUE} is not a valid reference',
            required: [true, 'Room status required']
        }
    }

})

mongoose.connect('mongodb://localhost:27017/hotel'); 
const modelRooms = mongoose.model('Rooms', roomsSchema); 
module.exports = modelRooms;