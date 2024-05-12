const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const { Console } = require('console');
//config env file
dotenv.config();

//rest objects
const app = express()


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//routes 
app.get('/', (req,res) => {
    res.send("<h1>Hello from server</h1>");
})

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running om port ${PORT}`);
});
