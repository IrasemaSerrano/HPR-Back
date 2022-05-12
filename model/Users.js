const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    firstName: {
        type: String,
        mingLength: [1, 'Your first name must contain at least one character'], 
        required: [true, 'First name required'] //Campo requerido
    },
    lastName: {
        type: String,
        mingLength: [1, 'Your last name must contain at least one character'],
        required: [true, 'Last name required']
    },
    email: {
        type: String,
        mingLength: [7, "Your email must contain at least seven characters"], //acuntname@domainname
        required: [true, 'Email required']
    },
    direction: {
        address: {
            type: String
        },
        suburb: {
            type: String
        },
        town: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        }
    },
    active: {
        type: Boolean //"si el usuario tiene acceso" ????
    },
    password: {
        type: String,
        mingLength: [8, "Your password must contain at least eight characters"],
        required: [true, 'Password required']
        //validar que lleve numero y mayusculas y minusculas
    },
    phone: {
        type: String,
        mingLength: [10, 'Your phone must contain at least ten numbers'],
        required: [true, 'Phone required']
    },
    role: {
        type: String,
        default: "Client", //Client | Admin | Receptionist
        enum: {
            values: ['Client','Admin','Receptionist'], 
            message: '{VALUE} is not a valid reference',
            required: [true, 'Role required']
        }
    },
    discounts: [
        {
            discount: {
                type: Number,
                //required: [true, 'Discount amount required']   ?????
            },
            date:{
                type: Date
            },
            status: {
                type: String,
                enum: {
                    values: ['Used','Pending','Cancelled'], 
                    message: '{VALUE} is not a valid reference',
                    required: [true, 'Status required']
                }
            }
        }
    ]

})

mongoose.connect('mongodb://localhost:27017/hotel'); 
const modelUsers = mongoose.model('Users', usersSchema);  
module.exports = modelUsers;