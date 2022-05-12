const modelUsers = require ('../model/Users') //Es una instancia de conexion a la colección de MongoDB
const jwt = require('jsonwebtoken')
const myStatus = [{desc:"success", number:200},{desc:"error", number:500}] 

//AQUÍ VAN LOS ENDPOINTS

// Endpoint: findAll
const findAll = (req, res) => { 
    modelUsers.find({}, (err, arr) => {  
        if (err) {                   
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], arr);
        };
    });
};

// Endpoint: findID
const findID = (req, res) => {
    modelUsers.find({}, (err, arr) => {
        if (err) {
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], arr);
        };
    });
};

// Endpoint: create
const addNew = (req, res) => {
    const dataUser = req.body; 

    const newUser = modelUsers({firstName:checkString(dataUser.firstName), lastName:checkString(dataUser.lastName),
        email:checkString(dataUser.email), direction: {address: dataUser.address, suburb: dataUser.suburb, 
        town: dataUser.town, state: dataUser.state, country: dataUser.country}, active: dataUser.active,
        password: checkString(dataUser.password), phone: checkString(dataUser.phone), role: checkString(dataUser.role),
        discounts: [{discount: dataUser.discount, date: dataUser.date, status: dataUser.status}]}); 

    newUser.save((err, user) => { 
        if (err) {
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], user); 
        }
    });
};

// Endpoint: login
const validateLogin = (req, res) => {
    const {email, password} = req.body //Obtienes el email y password del BODY, en caso de no existir se crean UNDEFINED

    //Busca en la coleccion de la BD un documento con el email y password recibido
    modelUsers.findOne({email, password}, (err, user) => { //"findOne" regresa un objeto y "find" un arreglo
        if (err) {
            //Si ocurre un error al realizar la busqueda se responde con el error
            sendMessage(res, myStatus[1], err.message);
        } else {
            //Se verifica que se haya obtenido un resultado 
            if (user) {
                const token = jwt.sign(
                    {
                        user_id: user._id,
                        email: user.email,
                        role: user.role,
                        access: true //????????????????????
                    },
                    'H0T3L-2022-1M5J',
                    { expiresIn: 60}
                );
                sendMessage(res, myStatus[0], {login:true, token, user});
            }else{
                sendMessage(res, myStatus[0], {login:false});
            }
        };
    });
};

module.exports = {validateLogin, findAll, findID, addNew};

function sendMessage(res, status, message){
    res.status(status.number).send({ status: status.desc, message });
}; 