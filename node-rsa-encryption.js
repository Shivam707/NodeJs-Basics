var crypto = require('crypto');
var fs = require('fs');

let data = 'string';

var publicKey = crypto.createPublicKey(fs.readFileSync((__dirname, 'key.pem')));
var binaryData = Buffer.from(data);

var res = crypto.publicEncrypt({key:publicKey, padding : crypto.constants.RSA_PKCS1_PADDING}, binaryData).toString('base64');
console.log(res)