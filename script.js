const dataField = document.getElementById("data");
const keyField = document.getElementById("key");
const buttonsContainer = document.querySelector("div");
const result = document.querySelector("p");
const copyButton = document.getElementById("copy");
const resetButton = document.getElementById("reset");
const defaultData = 'U2FsdGVkX18yiJ7JD+fobBWHSQ5SfHfuyABinWKbkD+X/bduRiGdTWiERmp2hAm4h3S8IDUTP+7Q3FDQ7sqLDMs0Xdc93ZEPxoGelIGxphqezrh0x54rZphoyGNtzM6l';

copyButton.style.display = "none";
result.style.display = "none";

buttonsContainer.addEventListener("click", (e) => {
  const target = e.target;
  let data = dataField.value.trim();
  const _key = keyField.value.trim();
  if (_key) {
    console.log(target);
    let resValue;
    if (target.id === "encrypt") {
      console.log("Encryption");
      const cipher = CryptoJS.AES.encrypt(data, _key);
      console.log("Cipher:", cipher);
      resValue = cipher.toString();
      console.log("Result:", resValue);
    }
    if (target.id === "decrypt") {
      if(data === ''){
        data = defaultData;
      }
      console.log("Decryption");
      const decipher = CryptoJS.AES.decrypt(data, _key);
      console.log("Decipher:", decipher);
      resValue = decipher.toString(CryptoJS.enc.Utf8);
      console.log("Result:", resValue);
    }

    if(data === defaultData){
      result.innerHTML = '<a href="' + resValue + '">' + resValue + '</a>';
    }else{
      result.textContent = resValue;
    }
    result.style.display = "block";
    copyButton.style.display = "block";
    copyButton.addEventListener("click", () => {
      window.navigator.clipboard.writeText(resValue);
    });
  }
});

resetButton.addEventListener("click", () => {
  result.style.display = "none";
  copyButton.style.display = "none";
  dataField.value = "";
  keyField.value = "";
});

// var crypt = {
//   secret: "CIPHERKEY",
//   encrypt: (originalData) => {
//     var cipher = CryptoJS.AES.encrypt(originalData, crypt.secret);
//     return cipher.toString();
//   },
//   decrypt: (cipher) => {
//     var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
//     return decipher.toString(CryptoJS.enc.Utf8);
//   },
// };
// var cipher = crypt.encrypt("Original Text");
// console.log(cipher);
// var decipher = crypt.decrypt(cipher);
// console.log(decipher);
