var a =Math.random();
var randomNumber1=Math.round(a *5)+1;

var random_image="images/"+"dice"+randomNumber1+".png";

a=document.querySelectorAll("img")[0].setAttribute("src",random_image);

var b= Math.random();
var randomNumber2=Math.round(b*5)+1;
var random_image1="images/"+"dice"+randomNumber2+".png";
b=document.querySelectorAll("img")[1].setAttribute("src",random_image1);


if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Match Draw!!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Wins"
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins"
}
