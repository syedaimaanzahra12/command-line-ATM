#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let pinCode = 121418;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin code",
    type: "number",
});
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code!!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount", message: "enter your amount", type: "number" },
        ]);
        myBalance -= amountAns.amount;
        console.log(`Your remaining balace: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log('Incorrect pin code');
}
