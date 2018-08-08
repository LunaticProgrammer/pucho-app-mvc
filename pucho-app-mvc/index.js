const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app  = express();
const expressEdge = require('express-edge');
const edge = require('edge.js');
const labelDetectionController01 = require('./controllers/labelDetect01')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);
app.use(fileUpload());
app.get("/", (req, res)=>{

    res.render('google');
});

app.post("/01/vision/label", labelDetectionController01);




app.listen(8080,() => {

    console.log('app lisitening on port 8080');
})