
const db = require('./mongo');
const fs = require('fs');

//CREAR DATE CON FORMATO DIA/MES/AÑO HORA:MIN:SEG.MILSEG

const newDate = () => {
    let day = new Date();
    let month = new Date();
    let year = new Date();
    let hour = new Date();
    let min = new Date();
    let sec = new Date();
    let miliSec = new Date();
    let time = '';

    day = day.getDate(),
        month = month.getMonth() + 1,
        year = year.getFullYear(),
        hour = hour.getHours(),
        min = min.getMinutes()
    sec = sec.getSeconds();
    miliSec = miliSec.getMilliseconds();

    if (min <= 9) {
        min = `0${min}`;
    }

    if (sec <= 9) {
        sec = `0${sec}`;
    }

    if (hour <= 12) {
        time = `${hour}:${min}:${sec}.${miliSec} AM`;
    } else {
        time = `${hour - 12}:${min}:${sec}.${miliSec} PM`;
    }



    let fullDate = `${day}/${month}/${year} ${time}`;

    return fullDate;
};

//CREAR USUARIO
const newUser = async (req) => {
    const temp = await new db.User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    const result = await temp.save();
    return result;
}






// CREAR LOG 
const logger = (nombre, text) => {

    let date = newDate();

    fs.appendFile( `/usr/src/app/${nombre}.txt`, `--${date} ====> ${text} \n`, (err) => {
        if (err) {
            console.log("Error no se pudo crear el archivo.");
        }
    });
}




module.exports = { newUser, logger };