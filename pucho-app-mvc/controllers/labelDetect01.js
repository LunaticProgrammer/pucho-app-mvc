// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');
// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
module.exports = async  (req, res) => {

  
  
  
      const  {image}  = req.files;
  
      image.mv(path.resolve(__dirname,'..', 'public/data', image.name), (error) => {
       console.log(error);
  
        }, (error, post) => {
          res.redirect("/");
        });
      
  
 await client
  .labelDetection(`./public/data/${image.name}`)
  .then(results => {
    const labels = results[0].labelAnnotations;

    res.render('google',{

      labels
    })
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
 
  
 await fs.unlinkSync(`./public/data/${image.name}`);
}