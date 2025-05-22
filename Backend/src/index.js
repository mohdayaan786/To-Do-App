const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const connect = require('./config/server-config');
const port = process.env.PORT;
const app = express();
const ApiRoutes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', ApiRoutes);

app.listen(port, async () => {
    console.log('Server is running on port 3000');
    await connect();
    console.log('Connected to MongoDB');
});