const mongoose = require('mongoose')


//create charges schema
const chargesSchema = new mongoose.Schema({
    name: {
        type: String,
        mingLength: [1, 'Charge´s name must contain at least one character.'],
        required: [true, 'Charge´s name is required.'] //'Required field'
    },
    price: {
        type: Number,
        min: [0, 'Price must be greater than or equal to 0.'],
        required: [true, 'Price is required.']
    },
    description: {
        type: String,
        mingLength: [20, 'The description needs to be more specific.'],
        maxlength: [500, 'The description should not be so long.'],
        required: [true, 'Description is required.']
    },
    enabled: {
        type: Boolean,
        default: true
    },
    portion: {
        type: String,
        mingLength: [2, 'Must have at least two character.'],
        required: [true, 'Portion is required.']
    },
});

mongoose.connect('mongodb://localhost:27017/hotel'); //Conectarnos con mongo.
const modelCharges = mongoose.model('Charges', chargesSchema); //Exportando el modelo. 
module.exports = modelCharges;


