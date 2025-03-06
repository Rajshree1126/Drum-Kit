var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonListe = this.innerHTML;
    sound(buttonListe);
    animator(buttonListe);
  });
}

document.addEventListener("keydown",function(event){
  sound(event.key);
  animator(event.key);
});


function sound(key){
  switch(key){
    case "w":
      var audio1 = new Audio('./sounds/tom-1.mp3');
      audio1.play();
      break;
    case "a":
      var audio1 = new Audio('./sounds/tom-2.mp3');
      audio1.play();
        break;
    case "s":
      var audio1 = new Audio('./sounds/tom-3.mp3');
      audio1.play();
        break;
    case "d":
      var audio1 = new Audio('./sounds/tom-4.mp3');
      audio1.play();
        break;
    case "j":
      var audio1 = new Audio('./sounds/snare.mp3');
      audio1.play();
        break;
    case "k":
      var audio2 = new Audio('./sounds/crash.mp3');
      audio2.play();
        break;
    case "l":
      var audio3 = new Audio('./sounds/kick-bass.mp3');
      audio3.play();
        break;  
    default:
      break;
  }
}
function animator(keyPressed){
  var obj = document.querySelector("."+keyPressed);
  obj.classList.add("pressed");
  setTimeout(function(){
    obj.classList.remove("pressed");
  },100);
}