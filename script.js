function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData('text',ev.target.id);
}
var count = 0;
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
var appended = ev.target.appendChild(document.getElementById(data));
if (appended) {
  count ++;
}
  console.log(count);
  if(count >= 9){
    alert("Perfect youre done!");
    window.location.href = "file:///home/bik777/Desktop/cssTest/Num-game/level2.html";
  }
}

var audio = new Audio("achievement-bell.wav");
function dragend() {
   audio.play();
  }

// console.log(count);
