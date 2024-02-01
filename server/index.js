const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ConnectDb = require('./config/db');
const userRoute = require('./routes/userRoute');

dotenv.config();
ConnectDb();
app.use(express.json());

const PORT = 8000 || process.env.PORT;

app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send("Hello anu k pati")
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})