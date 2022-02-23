const path = require('path');
var nodeRSA   = require('node-rsa');
const key = new nodeRSA('-----BEGIN PUBLIC KEY-----\n' + 
'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu/b3++XzGzMCjpwNEKsx\n'+
'BqbZ7G3wr8dlHToyiKDDcf6jaxQezW/cELrIghv1Sp17ohZxfPt0ac1j+qqleUE+\n'+
'3RRSfrvkZcBrHdNT9+WU650aS1QFII1YmpbZohdQ/EkIUjmaeuPM+iWcpDvwRQEK\n'+
'Reos+gaNSJxVeIpYBjiFNi4mrL+s4GTUBM8tKP5VaMBK6lSThaQDObiLE58s5ROa\n'+
'izh0uXPMnIZsmOIqnY5ksgXwb3q7AVmXoC+muQEI1Kt3e6MUW9A/Y8bScSqEL+D2\n'+
'+yiNom60TWOKN5QWEeO14e5Qk6uWbU0x2d1VN2RhbZwG/ZJ6s2s6ROcGEwqre5gS\n' +
'/wIDAQAB\n' +
'-----END PUBLIC KEY-----');
const fs = require('fs');
let publicKeyPath = path.join(__dirname,'key.pem');
let data = '2900@923128866005:12545';
const encrypted = key.encrypt(data, 'base64');
// function encryptRSA(data, publicKeyPath, encoding) {
//     var publicKey = fs.readFileSync(publicKeyPath).toString();
//     var crt = nodeRSA.createPublicKey(publicKey);
//     return (crt.encrypt(data.toString('hex'), 'hex', encoding, nodeRSA.RSA_PKCS1_PADDING).toString(encoding));
// }


console.log(encrypted)
