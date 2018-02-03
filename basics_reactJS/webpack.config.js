var webpack = require("webpack");
//global path library allows to resolve the path of application
var path=require("path");
//dist_dir to store the whole translated files and directory from which actual app is served
var DIST_DIR = path.resolve(__dirname, "dist");
//untraslated code
var SRC_DIR = path.resolve(__dirname, "src");
//webpack config a JS object
var config = {
  //start file for translation
  //root file where application starts
  entry:SRC_DIR + "/app/index.js",
  //anothe JS object
  output:{
    path:DIST_DIR + "/app",
    filename:"bundle.js",
    //public path folder to deploy on real server
    publicPath:"/app/",
  },
  //above code bundles evrything below code translates es6 to es5
  module:{
    //array of loader of JS objects
    loaders: [
      {
        //look at all js files
        test: /\.js?/,
        //js files in directory
        include: SRC_DIR,
        loader : "babel-loader",
        query:{
          presets:["react","es2015","stage-2"]
        }

      }
    ]
  }
};
//config is exported and webpack can pull in to import config
module.exports = config;
