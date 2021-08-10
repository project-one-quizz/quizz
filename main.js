

// q = question
// o = options
// a = answer
// array of objects
DataQuiz = [
    {
        q : "What is the standard distance between the target and archer in Olympics?",
        o : [
          "50 meters",
          "70 meters",
          "100 meters",
          "120 meters"
        ],
        a : '70' 
      },
      {
        q : "Which is the highest number on a standard roulette wheel?",
        o : [
          "22",
          "24",
          "32",
          "36"
        ],
        a : '36'
      },
      {
        q : "How much wood could a woodchuck chuck if a woodchuck would chuck wood?",
        o : [
          "400 pounds",
          "550 pounds",
          "700 pounds",
          "750 pounds"
        ],
        a : '700'
      },
      {
        q : "Which is the seventh planet from the sun?",
        o : [
          "Uranus",
          "Earth",
          "Pluto",
          "Mars"
        ],
        a : 'Uranus'
      },
      {
        q : "Which is the largest ocean on Earth?",
        o : [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean"
        ],
        a : 'Pacific'
      }
]
var score =0;
var counter = 0; 
$('#next-question-button').click(function(){  // click function 
  console.log($('label input:checked').val())
  if ($('label input:checked').val() === DataQuiz[counter].a){ // check the correct answer and increment the score by 10 points
    score += 10;
  }
  
  if (counter < DataQuiz.length ) {  // increment the counter when clicking 
  counter++;
  console.log(DataQuiz.length);
  if (counter === DataQuiz.length ) {  // if condition when finish all the quizz questions
    $(".box").hide()                   // show the score and hide the questions with the answers
    alert('your score is :'+score)
    
  }   // change the content when clicking 
  $('.text').text(DataQuiz[counter].q);
  $('#option1').replaceWith(`<label id="option1" for="ans1">
  <input id="ans1" value=`+DataQuiz[counter].o[0]+` type="radio" name="radio"/>`+DataQuiz[counter].o[0]+`
  </label>`)
  $('#option2').replaceWith(`<label id="option2" for="ans2">
  <input id="ans2" value=`+DataQuiz[counter].o[1]+` type="radio" name="radio"/>`+DataQuiz[counter].o[1]+`
  </label>`);
  $('#option3').replaceWith(`<label id="option3" for="ans3">
  <input id="ans3" value=`+DataQuiz[counter].o[2]+` type="radio" name="radio"/>`+DataQuiz[counter].o[2]+`
  </label>`);
  $('#option4').replaceWith(`<label id="option4" for="ans4">
  <input id="ans4" value=`+DataQuiz[counter].o[3]+` type="radio" name="radio"/>`+DataQuiz[counter].o[3]+`
  </label>`);
}
console.log(counter )
console.log(score)
})

// show the first question with answers when open the page
$('.box').append(`
<h2 class='text'>`+DataQuiz[counter].q+`</h2>
<div class="answers">

<label id="option1" for="ans1">
<input id="ans1" value=`+DataQuiz[counter].o[0]+` type="radio" name="radio"/>`+DataQuiz[counter].o[0]+`
</label><br>

<label id="option2" for="ans2">
<input id="ans2" value=`+DataQuiz[counter].o[1]+` type="radio" name="radio">`+DataQuiz[counter].o[1]+`
</label><br>

<label id="option3" for="ans3">
<input id="ans3" value=`+DataQuiz[counter].o[2]+` type="radio" name="radio">`+DataQuiz[counter].o[2]+`
</label><br>

<label id="option4" for="ans4">
<input id="ans4" value=`+DataQuiz[counter].o[3]+` type="radio" name="radio">`+DataQuiz[counter].o[3]+`
</label>
</div>`
)