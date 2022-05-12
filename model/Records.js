const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema({

    //_id

    //id(client) ???

    status: {
        type: String,
    },

    roomsForDay: [
        {
            date: {
                type: date,    
            },
            rooms: [
                {
                    room: {
                        //id room
                    },
                    roomType: {
                        //id roomtype
                    },
                    change: [
                        {
                            previousRoom: {
                                //id
                            },
                            cause: {
                                type: String,
                            },
                            newRoom: {
                                //id
                            },
                            employee: {
                                //id
                            }
                        }
                    ],
                    status: {
                        type: String,
                    },
                    roomers: {
                        type: Number
                    },
                    charges: [
                        {
                            charge: {
                                //id
                            },
                            employee: {
                                //id
                            },
                            date: {
                                type: String
                            },
                            quantity: {
                                type: Number
                            },
                            signature: {
                                type: String
                            },
                            status:{
                                type: String
                            },
                            total: {
                                type: Number
                            }
                        }
                    ]
                }
            ]
        }
    ],
    payment: [
        {
           date: {
               type: String
           } ,
           amount: {
               type: Number
           },
           reference: {
               type: String
           },
           status: {
               type: String
           }
        }
    ]

})

mongoose.connect('mongodb://localhost:27017/hotel'); 
const modelRecords = mongoose.model('Records', recordsSchema); 
module.exports = modelRecords;