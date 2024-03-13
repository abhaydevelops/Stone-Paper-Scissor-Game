var randomNumber1=Math.floor(Math.random()*3)+1;
var imagsrc1="./assets/"+randomNumber1+".jpg";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagsrc1);

var randomNumber2=Math.floor(Math.random()*3)+1;
var imagsrc2="./assets/"+randomNumber2+".jpg";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagsrc2);


if(randomNumber1==randomNumber2){
    var result=document.querySelector("h5").innerHTML="Game Draw!!🏳️";
}
else if((randomNumber1==1)&&(randomNumber2==2)){
    var result=document.querySelector("h5").innerHTML="PLAYER 2 Wins!🏆";
}
else if((randomNumber1==1)&&(randomNumber2==3)){
    var result=document.querySelector("h5").innerHTML="PLAYER 1 Wins!🏆";
}
else if((randomNumber1==2)&&(randomNumber2==1)){
    var result=document.querySelector("h5").innerHTML="PLAYER 1 Wins!🏆";
}
else if((randomNumber1==2)&&(randomNumber2==3)){
    var result=document.querySelector("h5").innerHTML="PLAYER 2 Wins!🏆";
}
else if((randomNumber1==3)&&(randomNumber2==1)){
    var result=document.querySelector("h5").innerHTML="PLAYER 2 Wins!🏆";
}
else if((randomNumber1==3)&&(randomNumber2==2)){
    var result=document.querySelector("h5").innerHTML="PLAYER 1 Wins!🏆";
}



