/* ------------------- Code for Delete Modal ----------------*/
var modal3 = document.getElementById("mymodal4");
// Get the button that opens the modal
var btn3 = document.getElementsByClassName("trash");
// Get the <span> element that closes the modal
var span3 = document.getElementById("no");

btn3[0].onclick=function() {
  modal3.style.display = "block";
 }
btn3[1].onclick=function() {
 modal3.style.display = "block";
}
btn3[2].onclick=function() {
 modal3.style.display = "block";
}
btn3[3].onclick=function() {
 modal3.style.display = "block";
}
btn3[4].onclick=function() {
 modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}