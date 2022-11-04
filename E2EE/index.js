var CryptoJS = require("crypto-js");
const EncryptRsa = require("encrypt-rsa").default;

// Symmetric Encryption
console.log("***** Symmetric Encryption *****");

var message = "Hello world!";
console.log("Original Message: ", message);
var encryptionKey = "Ashwani's secret key";

// Encryption
var ciphertext = CryptoJS.AES.encrypt(message, encryptionKey).toString();
console.log("Encrypted Message: ", ciphertext);

// Decryption
var bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log("Decrypted Message: ", originalText);
console.log("");

// Asymmetric Encryption
console.log("***** Asymmetric Encryption *****");

const encryptRsa = new EncryptRsa(); // create instance

const { privateKey: privateKey1, publicKey: publicKey1 } =
  encryptRsa.createPrivateAndPublicKeys();
const { privateKey: privateKey2, publicKey: publicKey2 } =
  encryptRsa.createPrivateAndPublicKeys();

const message1 = "Hey, Ashwani this side.";
const message2 = "Hi Ashwani, how are you doing?";
console.log("Original Message-1: ", message1);
console.log("Original Message-2: ", message2);

// Encryption
const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey({
  text: message1,
  publicKey: publicKey1,
});
const encryptedText2 = encryptRsa.encryptStringWithRsaPublicKey({
  text: message2,
  publicKey: publicKey2,
});
console.log("Encrypted Message-1: ", encryptedText1);
console.log("Encrypted Message-2: ", encryptedText2);

// Decryption
const decryptedText1 = encryptRsa.decryptStringWithRsaPrivateKey({
  text: encryptedText1,
  privateKey: privateKey1,
});
const decryptedText2 = encryptRsa.decryptStringWithRsaPrivateKey({
  text: encryptedText2,
  privateKey: privateKey2,
});
console.log("Decrypted Message-1: ", decryptedText1);
console.log("Decrypted Message-2: ", decryptedText2);
