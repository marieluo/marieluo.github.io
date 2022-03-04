function setUserName() {
    let userName = "Marie"
    //prompt("Please enter your name:")
    if (userName) {
        localStorage.setItem('name', userName)
        myHeading.textContent = 'Sensai Browser is cool, ' + userName
    } else {
        setUserName()
    }
}
function rce_calc() {
    alert("Launch calculator")
    const { exec } = require('child_process');
    exec('calc');
    alert("Calculator started!")
}

function open_onboarded_app() {
    alert("Open Redash Dashboard")
    document.location = 'https://beta.sensai.a2z.com/nexus/query/redash'
}

const myHeading = document.querySelector('h1')
if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Sensai Browser is cool, ' + storedName
}
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let imgAttr = myImage.getAttribute('src');
    if (imgAttr === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/porgs.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button#button1')
myButton.onclick = function () {
    setUserName()
}

let calculatorButton = document.querySelector('button#button2')
calculatorButton.onclick = function () {
    rce_calc()
}

let dashboardButton = document.querySelector('button#button3')
dashboardButton.onclick = function () {
    open_onboarded_app()
}
