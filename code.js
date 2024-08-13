function PlayCraps() {
    //this is a one line comment
    /*this is function to play Craps in game.html
    rules for craps
    Roll two dice</li>
    Add up to 7 or 11, you lose!
    If they are doubles and even, you win!
    Everything else is a push
    David Nunez
    6June2024

    Adding checkCreds() function for input validation on string.html page
    2. Make variable containing first name + space + last name
    3. Check for how many characters, >=20 present error
        1. less than 20, good entry
    4. Check to see if zip code is accurate
    5. Good name and zip, give secret message
    David Nunez 
    21June2024
    */

    console.log("playcraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //look for a loss
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "You lost to the Blade Runner!";
    } else if (die1 == die2 && die1 % 2 == 0){          //look for a win
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You beat the Blade Runner! Try again for more wins!";
    }else{      //everything else is a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "You did not win or lose, but who really wins anyway?";
    }
}

//for Assignment 7.1: Event Driven Programming
function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

//for Assignment 7.1: Event Driven Programming
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();
}

function checkCreds(){
    //input validation code from week 5
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of login";

    //make required variables
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //extract required variables
    firstName = document.getElementById("fName").value;
    console.log("the first name was entered as: " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("the last name was entered as: " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zipcode was entered as: " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is: " + fullName);

    fullNameLength = fullName.length;
    console.log("The variable fullName has " + fullNameLength + " characters");
    
    zipCodeNumb = parseInt(zipCode);
    console.log("The actual zip code number is " + zipCodeNumb);

    //testig 2 tests, full name and zipcode

    if(fullNameLength > 20 || fullNameLength < 2){
        console.log("Invalid full name");
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
    } else if(zipCode.length != 5){
        console.log("Invalid zip code");
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
    } else {
        alert("User credentials passed, welcome to the site,  " + fullName);
        document.getElementById("loginStatus").innerHTML = "credentials passed";
    }

}

function checkPalin(){
    console.log("checkPalin() started");

    //record the text input as a string
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is: " + entStr);

    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is: " + entStrNoSpace);

    //create new revArray var and reverse string
    var revStr;
    const revArray =[];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from array
    revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is " + equal);

    //write to palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome."
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome."
    }
}

//asignment 11.1, play sound
function rainSounds(){
    console.log("rainSounds() started");
    mySound = new Sound("rain-light-steady-ambience-loop-SBA-300138289-preview.mp3")
    mySound.play();
}

function Sound(srcFile){
    console.log("sound function started with " + srcFile + " source file");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function alarmSounds(){
    //this is the sound compononmet for the alarm
    console.log("rainSounds() started");
    //we choose teh file for the alarm
    mySound = new Sound("buzzer-short-SBA-300020211-preview.mp3")
    mySound.play();
}

//code for 12-1 putting it all together 
function startTimer(){
    console.log("startTimer() started");
    //get the value for the number of alrm steps
    var steps = document.getElementById("secInput").value;
   
//set up the countdown timer
    var currtime = steps;
    for(var i = 0; i <= steps; i++)
    setTimeout(function(){
if(currtime != 0){
    document.getElementById("timeLeft").innerHTML = currtime;
} else {
    document.getElementById("timeLeft").innerHTML = "time is up!";
    alarmSounds();
}
        console.log(currtime);
        currtime--;
    }, i*1000)
}