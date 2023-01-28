const door = document.querySelector(".door");
const number = document.getElementById("number");
const randNumber = randomInt(10, 20);
console.log(randNumber);
const response = document.getElementById("sentence");
const form = document.getElementById("theForm");
const restart = document.getElementById("restart");


function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

function showNumber() {
    number.innerHTML = randNumber;
}

function reset() {
    window.location.reload();
}

function openDoor() {

    const guess = document.getElementById("guess").value;
    const realGuess = +guess;
    form.classList.add("hide");
    restart.classList.remove("hide");
    


    setTimeout(showNumber, 400);
    if (realGuess == randNumber){
        response.innerHTML = "Correct!";
        door.classList.toggle("doorOpen");
    }

    else {
        response.innerHTML = "Too bad...";
        door.classList.toggle("doorOpen");
    }
}


document.getElementById("submit-btn").addEventListener("click", openDoor);
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    })
restart.addEventListener("click", reset);

    
    
 
//guess number
//number appears in door when open
