const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

function clickOne() {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  section1.classList.remove("hide")
  section1.classList.add("block")
  section2.classList.remove("block")
  section2.classList.add("hide")
}

function clickTwo() {
  btn1.classList.remove("active");
  btn2.classList.add("active");
  section1.classList.remove("block")
  section1.classList.add("hide")
  section2.classList.remove("hide")
  section2.classList.add("block")
}