#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 100000; // EuroOnTop
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
  [
    {
    name: "pin",
    message: "Enter Your Pin",
    type: "number",
}
       ]
);

if (pinAnswer.pin === myPin) {
    console.log("You Entered The Correct Pin!");
    let operationAnswer = await inquirer.prompt(
        [{
          name: "operation",
          message: "please select option",
          type: "list",
          choices: ["Withdraw Money", "Check Balance"]
      }
    ]

 ); if(operationAnswer.operation === "Withdraw Money") 
 {
    let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        }
    ]
    );     
         myBalance -= amountAns.amount
    console.log("Your Current Balance Is : " + myBalance);
    } 
    else if (operationAnswer.operation === "Check Balance")
    
console.log("Your Balance Is :" + myBalance)

 } 
  else   
  {
     console.log("Get Lost Bruh No Money Here")
    }
 