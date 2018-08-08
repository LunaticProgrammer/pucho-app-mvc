var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs =  require('fs');
var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: ''
  });

  var images_file = fs.createReadStream('../Desert.jpg');
var classifier_ids = ["default"];

var params = {
  images_file: images_file,
  classifier_ids: classifier_ids
};

visualRecognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});