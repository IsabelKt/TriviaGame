// javascript game needs to: have a start button, then a timer at top set to stop the game when the time
// reaches 0. When that happens game needs to show correct answers, incorrect answers,
// and unanswered.
// 3 pages total shown, start button, when game starts timer and form shows,
//when timer reaches 0 a new page shows with the results and a reset button option

//var audio = new Audio("raven.mp3");
var timerId = setTimeout()

var windowTimeout = setTimeout(function() {
    alert("Alert #1: Called automatically 1 second after page load.");
  }, 1000);

//  Start on click.
$("#start").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Alert #2: Called 3 seconds after the start button is clicked.");
    }, 3000);
  });
// Start page clears


// Timer starts
    function sixtySeconds() {
    $('#timer').append("<h2>'About 5 Seconds left!</h2>");
    console.log();
      // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
      // console log 5 seconds left
      setTimeout(sixtySeconds, 2000);
    }
//Timer ends
    function timeUp() {
      $('#timer').append("<h2>'Time's Up!'</h2>");
    console.log();
      // in the element with an id of `time-left` add an h2 saying Time's Up!
      // console log done
      // The following line will play the audio file above
      audio.play();
      ("#stop").hide()
    }

// Questions Clear: timer hits 0 then questions cleared id questions
// Answers log correct, incorrect unanswered if, else if, else 

////  Reset on click.
$("#reset").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Alert #2: Called 3 seconds after the start button is clicked.");
    }, 3000);
  });

