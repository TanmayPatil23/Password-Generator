const aplhabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_+-=";

const createPass = (len = 8, hasNums = true, hasSymbols = true) => {
  let range = aplhabet;
  if (hasNums) {
    range += numbers;
  }
  if (hasSymbols) {
    range += symbols;
  }
  return getPass(len, range);
};

const getPass = (len, range) => {
  let pass = "";
  for (let i = 0; i < len; ++i) {
    let randomInd = Math.floor(Math.random() * range.length);
    pass += range[randomInd];
  }
  return pass;
};

module.exports = createPass;
