import inquirer from 'inquirer';
let isFriend = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Enter your friend name:'
});
if (isFriend.name === 'Usama') {
    console.log(`${isFriend.name} is your friend.`);
}
else {
    console.log(`${isFriend.name} is not your friend.`);
}
