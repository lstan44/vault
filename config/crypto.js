const crypto = require('crypto');

var public_;
var private_;
// Generating key files using generateKeyPairSync() method
function generateKeyFiles() {
   const keyPair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 530,
      publicKeyEncoding: {
         type: 'spki',
         format: 'pem'
      },
      privateKeyEncoding: {
         type: 'pkcs8',
         format: 'pem',
         cipher: 'aes-256-cbc',
         passphrase: ''
      }
   });
   // Writing the keys in the following files
   public_ = keyPair.publicKey;
   private_ = keyPair.privateKey;
}

// Calling Generate keys method
generateKeyFiles();

// Encrypting the pased string
function encryptString (plaintext) {
   const publicKey = public_.toString("utf8");

   // Encrypting data using publicEncrypt() method and a public key
   const encrypted = crypto.publicEncrypt(
      publicKey, Buffer.from(plaintext));

   return encrypted.toString("base64");
}

// Decrypting the passed string with private Key
function decryptString (ciphertext) {
   const privateKey = private_.toString("utf8");
   // Decrypting data using privateDecrypt() method
   // and the corresponding private key
   const decrypted = crypto.privateDecrypt(
      {
         key: privateKey,
         passphrase: '',
      },
      Buffer.from(ciphertext, "base64")
   );
   return decrypted.toString("utf8");
}

// Following data will be encrypted and decrypted
const plainText = "Stanley Lalanne!";

// Calling the below method to encrypt string
const encrypted = encryptString(plainText);

// Printing the plain text
console.log("Plaintext:", plainText);
console.log();

// Printing the encrypted text
console.log("Encrypted Text: ", encrypted);
console.log();

// Printing the decrypted text
console.log("Decrypted Text: ",
   decryptString(encrypted));