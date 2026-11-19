const fs = require("fs");
let amount = parseInt(fs.readFileSync(0, "utf8").trim());

function withdraw(account, amount){
    if(amount <= account.balance){
        return account.balance -= amount
    }else{
        return "Insufficient balance !"
    }
}


const account = {
  owner: "Ali",
  balance: 500
};


console.log(withdraw(account, amount))