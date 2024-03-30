#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPinCode = 5202;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPinCode) {
  console.log("Correct PinCode!");

  let actionAns = await inquirer.prompt([
    {
      name: "action",
      message: "What do you want to do?",
      type: "list",
      choices: ["withdraw", "check your balance", "fast cash"],
    },
  ]);

  console.log(actionAns);

  if (actionAns.action === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your Amount: ",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient Amount :(");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    }
  } else if (actionAns.action === "check your balance") {
    console.log(`Your Current Balance is: ${myBalance}`);
  } else if (actionAns.action === "fast cash") {
    let fastCashAmount = await inquirer.prompt([
      {
        name: "fastCashAmount",
        message: "Select the amount for Fast Cash",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);
    if (fastCashAmount.fastCashAmount > myBalance) {
      console.log("Insufficient Amount");
    } else {
      myBalance -= fastCashAmount.fastCashAmount;
      console.log(`Your Remaining Balance is: ${myBalance}`);
    }
  }
} else {
  console.log("Incorrect PinCode :(");
}
