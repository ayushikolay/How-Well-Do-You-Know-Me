var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter your Name: ");

console.log("Welcome "+userName+". Do you know Ayushi Kolay?");

var score =0;

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

   if(userAnswer.toUpperCase() === answer.toUpperCase())
   {
     console.log("You are right!!!");
     score = score+1;
   }
   else{

      console.log("You are wrong!");
  
   }

   console.log("current score: ",score);
   console.log("------------------------");

}

var questions = [{
  question: "Where do i live? ",
  answer:"Agra"
},{
  question: "What's my Designation? ",
  answer:"Web Developer"
}];


for(var i=0;i<questions.length;i++)
{
   play(questions[i].question,questions[i].answer);
}

if(score > 0)
console.log("YAY! You Scored: "+score);

else
{
  console.log("You Scored: "+score+". Better luck next time.");
}
