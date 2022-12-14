const express = require ('express');
const { getConnection } = require ('./db/db-connection-mongo');
require ('dotenv').config();


const app = express();
const port = process.env.PORT;

getConnection();

//Parseo JSON
app.use(express.json());

app.use( '/cliente', require('./router/cliente') );
app.use( '/universidad', require('./router/universidad') );
app.use( '/etapas', require('./router/etapas') );
app.use( '/tipoProyecto', require('./router/tipoProyecto') );
app.use( '/proyecto', require('./router/proyecto') );


app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
});

