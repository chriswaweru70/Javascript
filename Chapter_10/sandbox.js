// If statements

let age = 30;

if (age > 39) {
    console.log('This is greater than 30');
}

const ninjas = ['Shaun', 'Ryu', 'Chris', 'Fish', 'Gilbert'];

if (ninjas.length > 4) {
    console.log('So many ninjas');
}

const password = 'pass@'

if (password.length >= 12 && password.includes("@")) {
    console.log('Thats a very strong password thankyou')
}
else if (password.length >= 8 || password.includes('@')) {
    console.log('This is a weak ass password')
} else {
    console.log('This password is okay');
}

// Logical AND && and Logical OR ||

//LOGICAL NOT(!)

let user = true

if (!user) {
    console.log('You must be logged in');
} else {
    console.log('You are logged in successfully')
}

//break and continue

const scores = [30, 50, 200, 59, 0, 78, 56, 3000]


for (let i = 0; i < scores.length; i++) {
    // console.log(scores[i]);
    if (scores[i] === 0) {
        continue;
    }
    console.log('Your score: ', scores[i]);
    if (scores[i] === 200) {
        // console.log('Hey until there we are doing great');
        break;
    }
}