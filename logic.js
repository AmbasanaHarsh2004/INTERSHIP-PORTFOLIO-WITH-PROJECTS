function printMultiplicationTable(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("Sum of numbers from 1 to 100 is:", sum);
}


function startGuessingGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1; // Random 1-10
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
        let guess = parseInt(prompt(`Attempt ${attempts + 1}/${maxAttempts}: Guess a number between 1 and 10`));
        attempts++;

        if (guess === targetNumber) {
            alert("Congratulations! You guessed it!");
            return;
        } else if (guess < targetNumber) {
            alert("Too low!");
        } else {
            alert("Too high!");
        }
    }
    // Requirement: Show fail message if attempts run out
    alert(`Game Over! You've used all 5 attempts. The number was ${targetNumber}.`);
}

function factorial(n) {
    if (n < 0) return "Error: Negative numbers not allowed";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}


let tasks = [
    { id: 1, title: "Finish Portfolio", completed: false },
    { id: 2, title: "Complete Assignment 5", completed: false }
];

function markTaskCompleted(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task "${task.title}" is now marked as completed.`);
    }
}


