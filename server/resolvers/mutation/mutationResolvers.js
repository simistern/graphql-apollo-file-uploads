const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../authenticate')
const fs = require('fs');

module.exports = {
  Mutation: {
    async singleFileUpload(parent, { file }){
      console.log('inside SingleFileUpload');
      const { createReadStream, filename, mimetype } = await file;
      const stream = await createReadStream();
      let writer = fs.createWriteStream('./hotdog.png');
    
      stream.on('open', function(fd){

      })

      stream.on('data', function(chunk){
        console.log(chunk)
        writer.write(chunk);
      })

      stream.on('end', function(){
        console.log('File uploaded');
        writer.end();
      })
    
    }
  },
}



