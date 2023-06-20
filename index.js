// call variables
const input = document.querySelectorAll('input');
const button = document.getElementById('btn');
const displayYear = document.getElementById('year');
const displayMonth = document.getElementById('month');
const displayDay = document.getElementById('day');

// getting date
const todayDate = new Date();
let todayDay = todayDate.getDate();
let todayMonth = todayDate.getMonth()+1; 
let todayYear = todayDate.getFullYear();

const numberOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// console.log(todayDate)

// call function

const calculateAge = () => {
    let y = todayYear - input[2].value
    let m = todayMonth - input[1].value
    let d = todayDay - input[0].value
    
    if(d < 0) {
        m -= 1
        d += numberOfMonth[Number(input[1].value)-1]
    }

    if(m < 0) {
        y -= 1
        m += 12
    }

    day.textContent = d
    month.textContent = m
    year.textContent = y
}

// add event listener
button.addEventListener('click', calculateAge)

// handle validation