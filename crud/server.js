const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path= require('path');

const connectDB = require('./server/database/connection');


const app = express();
dotenv.config({path : '.env'})
const PORT = process.env.PORT ||8080

app.use(morgan('tiny'));

//mongoDb connection
connectDB();

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")


app.use('/css',express.static(path.resolve(__dirname,"assests/css")))
app.use('/img',express.static(path.resolve(__dirname,"assests/img")))
app.use('/js',express.static(path.resolve(__dirname,"assests/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));