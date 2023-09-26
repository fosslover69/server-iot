const express = require('express');
const bodyParser = require('body-parser');
const app = express();
dotenv.config()
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Variable to store data
let dataVariable = false;

// POST request to update the variable
app.get('/update', (req, res) => {
  dataVariable = "true";
  console.log("hello");
  res.status(200).send('Variable updated');
});

app.get('/update_opp', (req, res)=>{
    dataVariable = "false";
    res.status(200).send(`data ${dataVariable}`);
})

// GET request to retrieve the variable
app.get('/getData', (req, res) => {
  res.status(200).json({ data: dataVariable });
});
app.get("/", (req,res)=> {
  res.send("Hello there! Api is working")
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
