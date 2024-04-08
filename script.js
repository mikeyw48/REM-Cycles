const button = document.getElementById("button");
const initialScreen = document.getElementById("initialScreen");
const secondScreen = document.getElementById("secondScreen");
const exitButton = document.getElementById("exitButton");
const exitDiv = document.getElementById("div3");
const selector = document.getElementById("select");
const errorDiv = document.getElementById("errorMessage");
const hourSelector = document.getElementById("hourSelector");

let time ;
let hours;
const valuesToCheck = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
const sleepMore = [1,2,3,4];
const responses = {
    even: "Falling asleep at this time would get you through approximatley"
}
const cycle = 90;

const checkHours = [5,6,7,8,9,10];

let minutes;
let remCycles;

const checkCycles = () =>{
    hours = parseInt(hourSelector.value);
    minutes = hours * 60;
    console.log(minutes + "Minutes");
    remCycles = Math.floor(minutes / 90);
    console.log(remCycles + " Rem Cycles per night")
}


// take in hours and time -- set it equal to a 24 hour clock -- math.floor it all

//Some of the earlier numbers from the AM will have to have their own if statements that logs ${time - hours + 12}:30PM

button.addEventListener("click", () => {
    hours = parseInt(hourSelector.value);
    time = parseInt(selector.value);
    switchScreens();
    checkCycles();
    //console.log(time)
    if (sleepMore.includes(hours)) {
        secondScreen.innerHTML = `<p><bold>You need to get more sleep!</bold></p>`
        //6 AM's translate to PM's below
    } else if ((time === 6) && hours === 5) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 1}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 6) && hours === 6) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 2}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 6) && hours === 7) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 3}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 6) && hours === 8) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 4}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 6) && hours === 9) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 5}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 6) && hours === 10) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 6}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    }
    //7AM's
    else if ((time === 7) && hours === 5) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 10}AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 7) && hours === 6) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 10} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 7) && hours === 7) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 10 + 12} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 7) && hours === 8) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 10 + 12} PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 7) && hours === 9) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 10 + 12} PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 7) && hours === 10) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 10 + 12} PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    }

    else if ((time === 8) && hours === 5) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 8}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 8) && hours === 6) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 9}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 8) && hours === 7) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours + 3}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 8) && hours === 8) {
        //11:30 PM> 24 - 8 = 16 - 8 = 8 + 3
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours + 3}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 8) && hours === 9) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours + 3}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 8) && hours === 10) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours + 3}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    }


    else if ((time === 9) && hours === 5) {
        // 24 - 9 = 15 - 5 = 10 - 1 - 5  
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 6} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 9) && hours === 6) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 6} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 9) && hours === 7) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours  - 6} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 9) && hours === 8) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 6} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 9) && hours === 9) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 6 + 12} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 9) && hours === 10) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 6 + 12} PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    }

    else if ((time === 10) && hours === 5) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 5}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 10) && hours === 6) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 5}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 10) && hours === 7) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 5}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 10) && hours === 8) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours  - 5}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 10) && hours === 9) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 5 + 12}:30AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 10) && hours === 10) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours  - 5 + 12}:30PM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    }

    else if ((time === 11) && hours === 5) {  
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 2} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 11) && hours === 6) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 2} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 11) && hours === 7) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours  - 2} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 11) && hours === 8) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 2} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 11) && hours === 9) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 2} AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    } else if ((time === 11) && hours === 10) {
        secondScreen.innerHTML = `
        <li class="custom-icon"><b>${24 - time - hours - 2 } AM</b>  -- ${responses.even} <b>${remCycles} REM Cycles</b>.</li>`
    }
    
})


// if time is even and 5 hours slept, 

exitButton.addEventListener("click", () => {
    secondScreen.classList.toggle("hidden");
    initialScreen.classList.toggle("hidden");
    exitDiv.classList.toggle("unhide");
})


const switchScreens = () => {
    initialScreen.classList.toggle("hidden");
    secondScreen.classList.toggle("hidden");
    exitDiv.classList.toggle("unhide");
}


