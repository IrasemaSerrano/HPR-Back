const mongoose = require('mongoose')

const questionsSchema = new mongoose.Schema({
    //_id
    question: {
        type: String,
    //     mingLength: [1, "Necesita tener minimo un caracter"],
        required: [true, 'Question required']
    },

    answers: [
        {
            position: {
                type: Number,
            },
            answer: {
                type: String,
                required: [true, 'Answer required']
            },
            needComment: {
                type: Boolean,
            }
        },
        {
            position: {
                type: Number,
            },
            answer: {
                type: String,
                required: [true, 'Answer required']
            },
            needComment: {
                type: Boolean,
            }
        }
    ],
    isOpen: {
        type: Boolean,
    },
    date: {
        type:String,
    },
    status: {
        type:String,
    }
});
    
mongoose.connect('mongodb://localhost:27017/hotel'); //conectarnos con mongo
const modelQuestions = mongoose.model('Questions', questionsSchema); //exportando el modelo 
module.exports = modelQuestions;