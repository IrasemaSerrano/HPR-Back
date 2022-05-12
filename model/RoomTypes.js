const mongoose = require('mongoose');

const roomTypesSchema = new mongoose.Schema({

    //id

    name: {
        type: String,
        enum: {
            values: ['Simple','Juniors','Imperial Suit'], 
            message: '{VALUE} is not a valid reference',
            required: [true, 'Room type required']
        }
    },

    description: {
        type: String,
        required: [true, 'The description of the type of room required']
    },

    price: {
        type: Number,
        required: [true, 'Room price required']
    },

    maxPeolpe: {
        type: Number,
    },

    photos: [
        {
            position: {
                type: Number,
            },
            photo: {
                type: String.arguments,
            },
            description: {
                type: String,
                required: [true, 'Room description required']
            }
        }
    ]

})

mongoose.connect('mongodb://localhost:27017/hotel'); 
const modelRoomType = mongoose.model('RoomTypes', roomTypesSchema); 
module.exports = modelRoomType;