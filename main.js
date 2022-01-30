  screen_width = 0; // Getting The Width of the screen
  screen_height = 0; // Getting the Height of the screen
  apple = ""; // Number of apples to be drawn will be stored inside this variable
  speak_data = ""; // The data that would be spoken out
  to_number = ""; // Number checker
  x = 0; // Getting the random x coordinates in this variable to place the images like spreaded out
  y = 0; // Getting the random y coordinates in this variable to place the images like spreaded out

  draw_apple = ""; // If the number is said out by the user then it will set the value as "set" in it to be checked if the user is said the number or not

  var SpeechRecognition = window.webkitSpeechRecognition; // Initalize speech recognition

  var recognition = new SpeechRecognition(); // new element for SpeechRecognition

  function start()
  {
  document.getElementById("status").innerHTML = "System is listening please speak";  // when the draw button is clicked it will update the element that is status to this value 
  recognition.start(); // Starting the Recognition
  } 

  recognition.onresult = function(event) { // If the function gets a result then the system will convert the speech to text

  console.log(event); // consoling the value in text

  content = event.results[0][0].transcript; // fetching the texted value

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; // putting the value inside the status element

  to_number = Number(content); // Changing the texted value into a number and storing in this variable

  if(Number.isInteger(to_number)){ // If the number thats got from the user is an Integer then run the code inside it
    document.getElementById("status").innerHTML = "Started Drawing Apple(s)"; // changing the value of status element to show whats happening currently
    draw_apple = "set"; // the number is checked by this variable that it is an Integer 
  }else{ // If the voice spoken out by the user is not an Integer then run this code thats inside it
    document.getElementById("status").innerHTML = "The System cant recognised a number. Try saying 1 or any other number" // Changing status element that its not an Integer
  }
          //------------------------------------------------------------------------------------------(Ended the checking part)

  }
  function preload(){ 
    apple = loadImage("https://i.postimg.cc/J08kPygR/apple.png"); // loading the image of an Apple
  }

  function setup() {
    screen_width = window.innerWidth; // This variable has the width of screen
    screen_height = window.innerHeight; // This variable has the height of the screen
    canvas = createCanvas(screen_width, screen_height-150); // Creating the Canvas
    canvas.position(0, 150); // The position of the canvas is 0, 150 coordinates of the screen
  }

  function draw() {
  if(draw_apple == "set") // If the voice spoken out by the user is an Integer then... 
  {
    for(var i = 1; i <= to_number; i++) // Iterated over the number present in the to_number variable
    {
      x = Math.floor(Math.random() * 1180); // random x coordinates
      y = Math.floor(Math.random() * 400); // random y coordinates
      image(apple, x, y, 50, 50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn"; // status said to the user that the apples has been drawn
    speak_data = to_number + "Apples Drawn"; // the thing that would be spoken out by the system
    speak(speak_data); // Running the speak function
    draw_apple = ""; // Again the var is set back to empty to be ready for next process
  }
  }

  function speak(){//                                         }
    var synth = window.speechSynthesis;//                      |
//                                                             |
    var utterThis = new SpeechSynthesisUtterance(speak_data);//|
//                                                             | ---- Proces for speaking out from system
    synth.speak(utterThis);//                                  |
//                                                             |
    speak_data = "";//                                         |
  }//                                                         }
