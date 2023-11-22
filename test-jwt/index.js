const jwt = require('jsonwebtoken');

const JWT_SECRET = 'bwamicro!23';

//create  basic token dengan proses syncronous 
const token = jwt.sign(
    { data: { kelas: 'bwamicro'}}, 
    JWT_SECRET,
    { expiresIn: '3600'});
    

//console.log(token);

//Asyncronous  create token 

//jwt.sign({ data: { kelas: 'bwamicro'}},JWT_SECRET, (err, token)=>{
//    console.log(token);
//});

//console.log('aaaaaa');