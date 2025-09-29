import { stdin } from "node:process";
import chalk from 'chalk';
import checkAge from "./ageCheck.js";
import {formatUser, getUserStatus} from "./userInfo.js";

console.log(chalk.red("Welcome to the user info Program"))
console.log(chalk.blue("What is your name?"))

stdin.on("data", (username) => {
    username = String(username).trim()
    console.log(chalk.green(`Welcome, dev ${username}`));

    console.log(chalk.blue("How Old are you?"));

stdin.on("data", (age) => {
    age = parseInt(String(age).trim());
    console.log(chalk.green(`Great, You are ${age} years old`));

let status = checkAge(age);
let formatForConsole = formatUser(username,age, status);
console.log(chalk.green(formatForConsole))

 process.exit()
})


})