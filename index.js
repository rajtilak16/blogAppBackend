const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());

//db connection
const dbConnection = require("./config/database");
dbConnection();

const blog = require("./routes/blog");
app.use("/api/v1/",blog);

app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})