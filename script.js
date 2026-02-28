// --- Assignment 6: Gallery Logic ---
// This MUST be at the top and NOT inside any other brackets
function showImage(src) {
    const mainImg = document.getElementById('large-img');
    if (mainImg) {
        mainImg.src = src;
    } else {
        console.error("Main image with ID 'large-img' not found!");
    }
}

// --- Assignment 6: Counter Logic ---
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const valueDisplay = document.getElementById('counter-value');

if (incrementBtn && decrementBtn && valueDisplay) {
    let count = 0;
    incrementBtn.addEventListener('click', () => {
        count++;
        valueDisplay.innerText = count;
    });
    decrementBtn.addEventListener('click', () => {
        count--;
        valueDisplay.innerText = count;
    });
}

// --- Assignment 6: Character Counter ---
const tweetBox = document.getElementById('tweet-box');
const charCount = document.getElementById('char-count');

if (tweetBox && charCount) {
    tweetBox.addEventListener('input', () => {
        charCount.innerText = tweetBox.value.length;
    });
}

// --- Assignment 7: Logic Tasks ---
// 1. Filter even numbers 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens); 

// 2. Laptop Object 
const Laptop = {
    brand: "Asus",
    ram: "16GB",
    price: 65000,
    details: function() {
        return `Brand: ${this.brand}, RAM: ${this.ram}`;
    }
};
console.log(Laptop.details());


// Assignment 8: Fetch first 5 titles
async function fetchApiData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log("--- Assignment 8: Top 5 Titles ---");
        data.slice(0, 5).forEach((post, i) => {
            console.log(`${i + 1}: ${post.title}`);
        });
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}
fetchApiData();


// Assignment 8: Sequential Downloads
function simulateDownload(file) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 4000) + 1000; // 1-5 seconds [cite: 44]
        setTimeout(() => {
            resolve(`Download Complete: ${file}`);
        }, delay);
    });
}


// Assignment 8: Fetch Titles & Display on Page [cite: 43, 46]
async function fetchAndDisplayTitles() {
    const list = document.getElementById('titles-list');
    if (!list) return;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        list.innerHTML = ""; // Clear the "Awaiting data" message
        data.slice(0, 5).forEach(post => {
            const li = document.createElement('li');
            li.innerText = `> ${post.title}`;
            list.appendChild(li);
        });
    } catch (error) {
        list.innerText = "Error loading data stream.";
    }
}
fetchAndDisplayTitles();

// Assignment 8: Sequential Downloads to UI [cite: 44, 45]
const log = document.getElementById('download-log');

function simulateDownload(file) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => resolve(`SUCCESS: ${file} verified.`), delay);
    });
}

async function startUILogDownloads() {
    if (!log) return;
    
    const files = ["Security_Patch.exe", "Database_Core.db", "UI_Assets.pak"];
    for (const file of files) {
        const p = document.createElement('p');
        p.innerText = `Downloading ${file}...`;
        log.appendChild(p);
        
        const result = await simulateDownload(file);
        
        const resP = document.createElement('p');
        resP.innerText = result;
        resP.style.color = "#38bdf8";
        log.appendChild(resP);
    }
}
startUILogDownloads();


// --- Assignment 10: Theme Toggle & Easter Egg Prank ---
const themeBtn = document.getElementById('theme-toggle');
const prankScreen = document.getElementById('prank-screen');

if (themeBtn && prankScreen) {
    themeBtn.addEventListener('click', () => {
        // Show scary screen every time
        prankScreen.style.display = 'flex'; 
        
        setTimeout(() => {
            prankScreen.style.display = 'none'; // Hide it
            alert("Nothing to worry, it was just a trick! 😉");
            document.body.classList.toggle('light-theme'); // Change color
        }, 2500);
    });
}