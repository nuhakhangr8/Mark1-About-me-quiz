var readlineSync=require('readline-sync');

var score=0;

var userName=readlineSync.question("Enter your name? ");
console.log("Welcome "+ userName +" to Do you know Nuha? ");

 
function play(question,answer){
var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    console.log("right");
    score=score+1
  }else{
    console.log("wrong");
  }
console.log("current score:",score);
console.log("---------------");
}


console.log("------LEVEL 0-----")
var questions=[{
  question:"Where Do I live? ",
  answer:"mars",
  },
   {
  question:"My birth place is? ",
  answer:"hyderabad",
},
  {
  question:"When is my Birthday ",
  answer:"24 december",
  },
 {
  question:"In 9th and 10th my hobby was to write_____ ",
  answer:"poem",
},
 {question:"I did not pay attention to my engish _______ class",
  answer:"Grammer"}];

//loops
for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
var highScore=[{
    name:"Nuha",
    score:2,
  },
  {
    name:"Mumma",
    score:2,
  }
];

console.log("High Score: ");
for(i=0;i<highScore.length;i++){
  console.log(highScore[i].name+":"+highScore[i].score);
}
function checkScore(){
for (var i=0;i<highScore.length;i++)
  if(score>highScore[i].score){
    console.log("✨✨✨✨✨✨✨");
    console.log("🎉🎉🎉Congratulations🎉🎉🎉");
    console.log("Send me a screenshot😇");
    console.log("✨✨✨✨✨✨✨");
   }
  };
console.log(checkScore(score));



// console.log("Score Board: ");
// for(i=0;i<highScore.length;i++){
//  // var high=highscore[i];
//   console.log(highScore[i].name+":"+highscore[i].score);
// }


// var name=highScore.name;
// var score=highScore.score;
// function checkScore(name,score){
// for(i=0;i<highScore.length;i++){
//    if(score>3){
//     console.log("✨✨✨✨✨✨✨");
//     console.log("🎉🎉🎉Congratulations🎉🎉🎉");
//     console.log("Send me a screenshot😇")
//    }
//   }
// }
// console.log(checkScore("Sumaiya","4"));



// console.log("Score Board: ");
// for(i=0;i<highScore.length;i++){
//  // var high=highscore[i];
//   console.log(highScore[i].name+":"+highscore[i].score);
// }


// var name=highScore.name;
// var score=highScore.score;
// function checkScore(name,score){
// for(i=0;i<highScore.length;i++){
//    if(score>3){
//     console.log("✨✨✨✨✨✨✨");
//     console.log("🎉🎉🎉Congratulations🎉🎉🎉");
//     console.log("Send me a screenshot😇")
//    }
//   }
// }
// console.log(checkScore("Sumaiya","4"));

