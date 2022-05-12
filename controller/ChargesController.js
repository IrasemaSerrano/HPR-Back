const modelCharges = require ('../model/Charges') //traer modelo

const myStatus = [{desc:"success", number:200},{desc:"error", number:500}]


const findAll = (req, res) => { //Con Req obtienes información que se envía para esa petición | Mientras que con Res te permite dar una respuesta a esa petición
    modelCharges.find({}, (err, arr) => {  //find(where(condición: indicar qué es lo que quieres traerte), callback(retroalimentación: error o resultado))
        if (err) {                     //El "error" sería directamente con la base de datos, no con la API Y  el "resultado" es lo que regresa la base de datos
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], arr);
        };
    });
};

const findID = (req, res) => {
    modelCharges.find({}, (err, arr) => {
        if (err) {
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], arr);
        };
    });
};

const addNew = (req, res) => {
    const dataCharge = req.body; //Obtiene los datos que se envian

    const newCharge = modelCharges({name:checkString(dataCharge.name), price:dataCharge.price,
        description:checkString(dataCharge.description), portion:checkString(dataCharge.portion)}); //Agrega los datos a un nuevo modelo

    //Se manda a guardar
    newCharge.save((err, charge) => { //charge = es lo que guardas
        if (err) {
            sendMessage(res, myStatus[1], err.message);
        } else {
            sendMessage(res, myStatus[0], charge); //muestra lo que guardaste
        }
    });

};

const deleteForID = (req, res) => {
    const idCharge = req.body;

    modelCharges.deleteOne({_id:idCharge._id}, (error)=>{
        if (err) {                   
            sendMessage(res, myStatus[1], error);
        } else {
            sendMessage(res, myStatus[0], "Deleted");
        };
    })
}
module.exports = {
    findAll, 
    addNew,
    findID,
    deleteForID
};

function sendMessage(res, status, message){
    res.status(status.number).send({ status: status.desc, message });
    //{status:"error", message: "Necesita tener minimo un caracter"}
};

function checkString(s){
    if (typeof(s)==='string') {
        return s.trim();//quita los espacios en blanco de las orillas
    }
    return "";
}
