function humburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";   
}

function cancle(){
    const navbar = document.querySelector(".cancle");
    navbar.style.transform = "translateY(-500px)";   
}

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
]

let speed = 100;
const textElement = document.querySelector(".typeWriter_text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if(charcterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter,speed);
    }
    else{
        setTimeout(eraseText , 1000);

    }
}

function eraseText(){
    if(textElement.innerHTML.length >0){
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText , 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter , 500);
    }
}

window.onload = typeWriter;