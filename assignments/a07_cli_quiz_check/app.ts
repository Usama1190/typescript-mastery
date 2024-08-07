import inquirer from "inquirer";


let input1 = await inquirer.prompt([{
    name: 'userAns',
    type: 'string',
    message: 'What is the capital of France?'
}]);


function quiz(question: string, correctAnswer: string) {
    if(input1.userAns.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log('Correct!');
        
    }
    else {
        console.log('Wrong answer, Try again.');
        
    }
}

quiz('What is the capital of France?', 'Paris');