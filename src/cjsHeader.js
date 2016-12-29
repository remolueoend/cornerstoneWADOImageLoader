var cornerstone = require('../../cornerstone/build/built');
//var CharLS = require('../examples/libCharLS');
var OpenJPEG = require('../examples/libopenjpeg');
var dicomParser = require('dicom-parser');
var $ = require('jquery');

var cornerstoneWADOImageLoader = {
  internal: {
    options: {
      // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
      beforeSend: function (xhr) {
      },
      // callback allowing modification of newly created image objects
      imageCreated: function (image) {
      }
    }
  }
};