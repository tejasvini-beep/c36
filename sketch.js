var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("plum");
 fill(0);
  stroke("purple");
  textSize(20);
  text("~in first input write your name and in second one write your answer", 20, 390);
  
}
