// JS file;

// call variables; 
const input = document.querySelectorAll('input');
const button = document.getElementById('btn');

const errorP = document.querySelectorAll('.d')
const errorAlert = document.querySelectorAll('.required')

const displayAge = document.querySelectorAll('.output p span');


// getting date;
const todayDate = new Date();
let todayDay = todayDate.getDate();
let todayMonth = todayDate.getMonth()+1; 
let todayYear = todayDate.getFullYear();

const numberOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// call function;
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

    inputValidate()
}


// handle validation
const inputValidate = () =>{
    const dayvalue = input[0].value
    const monthvalue = input[1].value
    const yearvalue = input[2].value

    // day validation section
    if(!dayvalue){
        errorAlert[0].textContent = 'This field is required';
        input[0].style.border = '0.9px solid hsl(0, 100%, 67%)';
        errorP[0].style.color = 'hsl(0, 100%, 67%)';
        displayAge.forEach(item =>item.textContent = '- -' )
    } 
    else if(dayvalue > numberOfMonth|| 
        dayvalue < 1){
        errorAlert[0].textContent = 'Must be a valid date';
        input[0].style.border = '0.9px solid hsl(0, 100%, 67%)';
        errorP[0].style.color = 'hsl(0, 100%, 67%)';
        displayAge.forEach(item =>item.textContent = '- -' )
    } 
    else {
        errorAlert[0].textContent = ''
        input[0].style.border = '0.9px solid hsl(0, 0%, 86%)';
        errorP[0].style.color = 'hsl(0, 1%, 44%)';
    }

    // month validation section;
    if(!monthvalue){
        errorAlert[1].textContent = 'This field is required';
        input[1].style.border = '0.9px solid hsl(0, 100%, 67%)';
        errorP[1].style.color = 'hsl(0, 100%, 67%)';
        displayAge.forEach(item =>item.textContent = '- -' )
    } 
    else if(monthvalue > 12|| monthvalue < 1){
        errorAlert[1].textContent = 'Must be a valid month';
        input[1].style.border = '0.9px solid hsl(0, 100%, 67%)';
        errorP[1].style.color = 'hsl(0, 100%, 67%)';
        displayAge.forEach(item =>item.textContent = '- -' )
    }
    else {
        errorAlert[1].textContent = ''
        input[1].style.border = '0.9px solid hsl(0, 0%, 86%)';
        errorP[1].style.color = 'hsl(0, 1%, 44%)';
    }

    // year validation section
    if(!yearvalue){
        errorAlert[2].textContent = 'This field is required';
        input[2].style.border = '0.9px solid hsl(0, 100%, 67%)';
        errorP[2].style.color = 'hsl(0, 100%, 67%)';
        displayAge.forEach(item =>item.textContent = '- -' )

    } 
    else if(yearvalue > todayYear|| 
        new Date (yearvalue,monthvalue - 1, dayvalue) > todayDate){
        errorAlert[2].textContent = 'Must be in the past';
        input[2].style.border = '0.9px solid hsl(0, 100%, 67%)';
        errorP[2].style.color = 'hsl(0, 100%, 67%)';
        displayAge.forEach(item =>item.textContent = '- -' )
    }
    else {
        errorAlert[2].textContent = ''
        input[2].style.border = '0.9px solid hsl(0, 0%, 86%)';
        errorP[2].style.color = 'hsl(0, 1%, 44%)';
    }
}

// add event listener
button.addEventListener('click', calculateAge)
