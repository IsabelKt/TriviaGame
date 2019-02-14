$('#start').on('click',function(){
  console.log("hello");
  game.start();
})

$(document).on('click', '#end', function(){
  game.done();
})

var questions = [{
  question:"Think about Matilda, does the Chocolate Cake Come to Mind?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"false",
  chocolateAnswer:"so true",
  samplerAnswer:"it's complicated",
},
{
  question:"Picture a Rasbperry, are you feeling the sour and sweet flavour?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"so true",
  chocolateAnswer:"false",
  samplerAnswer:"it's complicated",
},
{
  question:"Did you have a long day?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"false",
  chocolateAnswer:"so true",
  samplerAnswer:"it's complicated",
},
{
  question:"Are you doing something after eating?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"so true",
  chocolateAnswer:"false",
  samplerAnswer:"it's complicated",
},
{
  question:"Are you feeling adventurous?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"it's complicated",
  chocolateAnswer:"false",
  samplerAnswer:"so true",
},
{
  question:"Are you looking for richness of flavour?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"false",
  chocolateAnswer:"so true",
  samplerAnswer:"it's complicated",
},
{
  question:"Do you want someting subtle and light?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"so true",
  chocolateAnswer:"false",
  samplerAnswer:"it's complicated",
},
{
  question:"Do you want to try everything you see?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"it's complicated",
  chocolateAnswer:"false",
  samplerAnswer:"so true",
},
{
  question:"Are you feeling merry and bright?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"so true",
  chocolateAnswer:"false",
  samplerAnswer:"it's complicated",
},
{
  question:"Do you often crave chocolate?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"false",
  chocolateAnswer:"so true",
  samplerAnswer:"it's complicated",
},
{
  question:"Are you a fruit person?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"so true",
  chocolateAnswer:"false",
  samplerAnswer:"it's complicated",
},
{
  question:"Do you like exploring different flavors?",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"it's complicated",
  chocolateAnswer:"false",
  samplerAnswer:"so true",
},
{
  question:"You really don't care that much about dessert, just want something sweet.",
  answers:["so true", "false", "it's complicated"],
  fruitAnswer:"it's complicated",
  chocolateAnswer:"false",
  samplerAnswer:"so true",
}];

var game = {
   fruitAnswer: 0,
   chocolateAnswer: 0,
   sampleAnswer: 0,
   counter: 120,
   countdown: function(){
     game.counter--;
     $('#counter').html(game.counter);
     if(game.counter<=0){
       console.log("Time is up!")
       game.done();
     }
   },

start: function(){
  timer = setInterval(game.countdown, 1000)
  $('#subwrapper').prepend('<h2> Time Remaining: <span id="counter"> 120</span> Seconds </h2>')
  $('#start').remove();
  for(var i=0; i<questions.length; i++){
    $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
    for(var j=0; j<questions[i].answers.length;j++){
      $("#subwrapper").append("<input type= 'radio' name='question-" + i +"'  value='" + questions[i].answers[j]+ "'>" + questions[i].answers[j])
    }
  }
  $("#subwrapper").append('<br><button id="end">Done</button>')
},
done: function(){
  $.each($('input[name="question-1]": checked'), function(){
    if ($(this).val()==questions[1].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[1].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[1].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-2]": checked'), function(){
    if ($(this).val()==questions[2].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[2].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[2].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-3]": checked'), function(){
    if ($(this).val()==questions[3].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[3].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[2].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-4]": checked'), function(){
    if ($(this).val()==questions[4].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[4].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[4].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-5]": checked'), function(){
    if ($(this).val()==questions[5].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[5].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[5].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-6]": checked'), function(){
    if ($(this).val()==questions[6].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[6].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[6].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-7]": checked'), function(){
    if ($(this).val()==questions[7].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[7].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[7].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-8]": checked'), function(){
    if ($(this).val()==questions[8].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[8].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[8].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-9]": checked'), function(){
    if ($(this).val()==questions[9].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[9].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[9].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-10]": checked'), function(){
    if ($(this).val()==questions[10].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[10].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[10].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-11]": checked'), function(){
    if ($(this).val()==questions[11].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[11].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[11].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-12]": checked'), function(){
    if ($(this).val()==questions[12].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[12].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[12].samplerAnswer){
      game.sampler++;
    }
  });
  $.each($('input[name="question-13]": checked'), function(){
    if ($(this).val()==questions[13].fruitAnswer){
      game.fruit++;
    }
    else if($(this).val()==questions[13].chocolateAnswer){
      game.chocolate++;
    }
    else if($(this).val()==questions[13].samplerAnswer){
      game.sampler++;
    }
  });
  this.result();
},
result: function(){
  clearInterval(timer);
  $('#subwrapper h2').remove();
  $('#subwrapper').html("<h2>All Done!</h2>");
  $('#subwrapper').append("<h3> Fruit Craving Score:" +this.fruit+  "</h3>");
  $('#subwrapper').append("<h3> Chocolate Craving Score:" +this.chocolate+  "</h3>");
  $('#subwrapper').append("<h3> Level of Sampler Interest:" +this.sampler+  "</h3>");
  $('#subwrapper').append("<h3> Unanswered:" +(questions.length-(this.sampler +this.chocolate+this.fruit))+"</h3>");
}
}


// javascript game needs to: have a start button, then a timer at top set to stop the game when the time
// reaches 0. When that happens game needs to show correct answers, incorrect answers,(* or if more true then one answer, if more false another, if equal another, if many missing uncooked)
// and unanswered.(answers of cakes or pies recommendation engine, if more its complicatef the answer is a sampler tray of desserts)
// 3 pages total shown, start button, when game starts timer and form shows,
//when timer reaches 0 a new page shows with the results and a reset button option
// if user answers all correctly in the time then a gif shows up with snoopy doing a happy dance/ or confetti falls (css)


// // // Timer starts
// //     function sixtySeconds() {
// //     $('#timer').append("<h2>'About 5 Seconds left!</h2>");
// //     console.log();
// //       // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
// //       // console log 5 seconds left
// //       setTimeout(sixtySeconds, 2000);
// //     }
// // //Timer ends
// //     function timeUp() {
// //       $('#timer').append("<h2>'Time's Up!'</h2>");
// //     console.log();
// //       // in the element with an id of `time-left` add an h2 saying Time's Up!
// //       // console log done
// //       // The following line will play the audio file above
// //       //audio.play();
// //       ("#stop").hide()
// //     }

// // // Questions Clear: timer hits 0 then questions cleared id questions
// // // Answers log correct, incorrect unanswered if, else if, else 

// // ////  Reset on click.
// // $("#reset").on("click", function() {
// //     //  Set the button alert's timeout to run three seconds after the function's called.
// //     delayButtonAlert = setTimeout(function() {
// //       alert("Alert #2: Called 3 seconds after the start button is clicked.");
// //     }, 3000);
// //   });

