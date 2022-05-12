const mongoose = require('mongoose')

const surveysSchema = mongoose.Schema({
    //id
    date: {
        type: Date
    },
    record: {
        //Id_Records
    },
    questions: [
        {
            // question ID
            answer: {
                type: String,
                required: [true, 'Answer required']
            },
            comment: {
                type: String
            }
        },
        {
            // question ID
            answer: {
                type: String,
                required: [true, 'Answer required']
            },
            comment: {
                type: String
            } 
        }
    ]
}) 

mongoose.connect('mongodb://localhost:27017/hotel');
const modelSurveys = mongoose.model('Surveys', surveysSchema); 
module.exports = modelSurveys;