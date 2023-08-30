import { sub } from "./sub.js";
import { sum } from "./add.js";
import { multi } from "./multi.js";
import { divide } from "./divide.js";

import inquirer from "inquirer"



const num1 = await inquirer.prompt({
    message: " enter your firstnumber",
    type: "number",
    name: "firstnum"


})

const num2 = await inquirer.prompt({
    message: "enter your secondnumber",
    type: "number",
    name: "secondnum"


})
const answer = await inquirer.prompt({
    type: "list",
    name: "operation",
    choices: ["subraction", "addition", "multiplication", "division"],
    message: "which operation do you want to perform"


})
function finalresult() {
    if (answer.operation == "addition") {
        let result2 = sum(num1.firstnum, num2.secondnum);
        console.log(result2)


    } else if (answer.operation == "subraction") {
        let result3= sub(num1.firstnum, num2.secondnum)
        console.log(result3)
    } else if (answer.operation == "multiplication") {
        let result1 = multi(num1.firstnum, num2.secondnum)
        console.log(result1)


    } else if (answer.operation == "division") {
        let result5 = divide(num1.firstnum, num2.secondnum)
        console.log(result5)


    } else { "thank you for using app" }


}

finalresult()




// let result1 =multi(num1.firstnum, num2.secondnum)
// console.log(result1)

// let result2 = sub(num1.firstnum, num2.secondnum)
// console.log(result2)

 //let result4 = sum(num1.firstnum, num2.secondnum)
 //console.log(result4)

// let result5 = divide(num1.firstnum, num2.secondnum)
// console.log(result5)
