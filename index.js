// import json server
const jsonserver = require('json-server')

// create server
const employeeServer = jsonserver.create()

//create middlewear to convert the json format
const middlewear = jsonserver.defaults()

// import db.json file
const router = jsonserver.router("db.json")

// set port for the server
 const PORT = 4000 || process.env.PORT

 //server use middleewear
 employeeServer.use(middlewear)
 employeeServer.use(router)

 // listen()
 employeeServer.listen(PORT,()=>{
    console.log((`server running succesfully at port number ${PORT}`));
    
 })
 