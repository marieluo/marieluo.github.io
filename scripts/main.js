function setUserName() {
    let userName = prompt("Please enter your name:")
    if (userName) {
        localStorage.setItem('name', userName)
        myHeading.textContent = 'Mozilla is cool, ' + userName
    } else {
        setUserName()
    }
}
const myHeading = document.querySelector('h1')
if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla is cool, ' + storedName
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
let myButton = document.querySelector('button')
myButton.onclick = function () {
    setUserName()
}