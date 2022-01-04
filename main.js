// Aditya Ghidora
// source for the formulae
// https://en.wikipedia.org/wiki/Wheatstone_bridge

var unknown = 20,
  supply = 20,
  set = false,
  running = false,
  final;

let r1 = 20,
  r2 = 20,
  r3 = 20,
  vs = 20;
function galvanometer() {
  // Takes the 4 resistances and a supply voltage
  // outputs the galvanometer voltage
  let first = r2 / (r1 + r2);
  let second = unknown / (r3 + unknown);
  let vg = (first - second) * vs;
  return vg;
}

function unkownResistance() {
  // console.log(r1,r2,r3,vg,vs);
  // Takes the first 3 resistances, galvanometer voltage and supply voltage
  // outputs the unknown resistance
  // let numerator = r2 * vs - (r1 + r2) * vg;
  // let denominator = r1 * vs + (r1 + r2) * vg;
  // let numerator = r2;
  // let denominator = r1;
  let rx = (r2 * r3) / r1;
  return rx;
}

// Aditya Ghidora
// Lakshman
function glow(a, b) {
  var p = document.getElementById(a);
  var q = document.getElementById(b);
  q.style.transition = "1s";
  q.style.backgroundColor = "rgba(09, 93, 252,0.2)";
  setTimeout(() => {
    q.style.backgroundColor = "#00000000";
  }, 1000);
}
// Lakshman
//aditya ray----------------
function matchValues(a, b) {
  if (set && running) {
    document.getElementById(b).value = document.getElementById(a).value;
    r1 = parseFloat(document.getElementById("rs1").value);
    r2 = parseFloat(document.getElementById("rs2").value);
    r3 = parseFloat(document.getElementById("rs3").value);
    // console.log(rs1,rs2,rs3);
    var vg = galvanometer();
    console.log(vg);
    document.getElementById("vg").value = vg;
    console.log(document.getElementById("vg").value);
    final = unkownResistance();
    glow(a, b); //lakshman
  }
}
function swap(a, b) {
  document.getElementById(b).value = document.getElementById(a).value;
}
function setResistance() {
  if (!running) {
    set = true;
    unknown = parseFloat(document.getElementById("rsx").value);
    supply = parseFloat(document.getElementById("vs").value);
  } else {
    alert("Switch off the circuit first.");
  }
}
function switchCircuit() {
  if (!running) {
    running = true;
    document.querySelector(".switch").innerHTML =
      '<img src="./images/switchonn.png" alt="" class="switchonn" onclick="switchCircuit()">';
  } else {
    running = false;
    document.querySelector(".switch").innerHTML =
      '<img src="./images/switchoff.png" alt="" class="switchonn" onclick="switchCircuit()">';
  }
}
function simulate() {
  if (running) {
    document.getElementById("sim").value = final;
  } else {
    alert(
      "Please Switch on the supply to verify the milivoltmeter reading first."
    );
  }
}
var rowno = 0;
function addObs() {
  rowno++;
  var table = document.getElementById("observation");
  var rs1 = document.getElementById("rs1").value;
  var rs2 = document.getElementById("rs2").value;
  var rs3 = document.getElementById("rs3").value;
  table.innerHTML +=
    "<tr><td>" +
    rowno +
    "</td><td>" +
    supply +
    "</td><td>" +
    rs1 +
    "</td><td>" +
    rs2 +
    "</td><td>" +
    rs3 +
    "</td><td>" +
    final +
    "</td></tr>";
}
//aditya ray----------

var f1 = document.getElementById("AlimCard1");
var f2 = document.getElementById("AlimCard2");

function fun1() {
  document.getElementById("AlimCard1").style.display = "block";
  document.getElementById("AlimCard2").style.display = "none";

  document.getElementById("f1").style.boxShadow =
    "inset 0.15em 0.15em 0.15em var(--shadow-white), inset -0.15em -0.15em 0.15em var(--shadow-gray), 0.3rem 0.3rem 0.6rem var(--shadow-gray), -0.3rem 0rem 0.6rem var(--shadow-white)";
  document.getElementById("f1").style.color = "#6d5dfc";

  document.getElementById("f2").style.boxShadow = "none";
  document.getElementById("f2").style.color = "black";
}
function fun2() {
  onmouseover = "bigImg(this)";

  document.getElementById("AlimCard1").style.display = "none";
  document.getElementById("AlimCard2").style.display = "block";
  document.getElementById("f2").style.boxShadow =
    "inset 0.15em 0.15em 0.15em var(--shadow-white), inset -0.15em -0.15em 0.15em var(--shadow-gray), 0.3rem 0.3rem 0.6rem var(--shadow-gray), -0.3rem 0rem 0.6rem var(--shadow-white)";
  document.getElementById("f2").style.color = "#6d5dfc";

  document.getElementById("f1").style.boxShadow = "none";
  document.getElementById("f1").style.color = "black";
}

// alim



//quiz
//piyush thakare
function check(ans,correct,msg){
  if(document.getElementById(correct).checked){
    document.getElementById(msg).innerHTML='correct!'
    document.getElementById(msg).style.backgroundColor='rgb(93 225 79 / 62%)';
    document.getElementById(ans).style.backgroundColor='rgb(93 225 79 / 62%)';
  }
  else{
    document.getElementById(msg).innerHTML='Incorrect!'
    document.getElementById(msg).style.backgroundColor='rgb(255 0 0 / 58%)';
    document.getElementById(ans).style.backgroundColor='rgb(93 225 79 / 62%)';
  }
  
}
