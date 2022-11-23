function verifyPassword(password) {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100}$/)
    ? "verified"
    : "Password rejected";
}

module.exports = verifyPassword;
console.log(verifyPassword("1Aasasxs8"));
