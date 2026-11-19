const fs = require("fs");
const [username, password] = fs.readFileSync(0, "utf8").trim().split(" ");


let login = (user, username, password) => {
    return (username == user.username && password == user.password)
    ? 'Login successful !'
    : 'Invalid username or password'
}




const user = {
    username: "admin",
    password: "12345"
};

console.log(login(user, username, password))