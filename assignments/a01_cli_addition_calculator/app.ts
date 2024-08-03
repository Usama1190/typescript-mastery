// import inquirer from 'inquirer';

// const input1 = await inquirer.prompt({
//     name: 'num1',
//     type: 'number',
//     message: 'Enter first number:'
// });

// const input2 = await inquirer.prompt({
//     name: 'num2',
//     type: 'number',
//     message: 'Enter second number:'
// });

// const total = input1.num1 + input2.num2;
// console.log(total);




// import inquirer from 'inquirer';

// async function getNumberInputs() {
//   const input1 = await inquirer.prompt([
//     {
//       name: 'num1',
//       type: 'input', // Use 'input' for manual number parsing
//       message: 'Enter first number:',
//       validate: (input: string) => {
//         const parsed = parseFloat(input);
//         if (isNaN(parsed)) {
//           return 'Please enter a valid number';
//         }
//         return true;
//       },
//     },
//   ]);

//   const input2 = await inquirer.prompt([
//     {
//       name: 'num2',
//       type: 'input', // Use 'input' for manual number parsing
//       message: 'Enter second number:',
//       validate: (input: string) => {
//         const parsed = parseFloat(input);
//         if (isNaN(parsed)) {
//           return 'Please enter a valid number';
//         }
//         return true;
//       },
//     },
//   ]);

//   const num1 = parseFloat(input1.num1);
//   const num2 = parseFloat(input2.num2);

//   const total = num1 + num2;
//   console.log(`Total: ${total}`);
// }

// getNumberInputs().catch((error) => {
//   console.error('An error occurred:', error);
// });
