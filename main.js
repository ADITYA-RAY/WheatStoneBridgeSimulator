// Aditya Ghidora
// source for the formulae
// https://en.wikipedia.org/wiki/Wheatstone_bridge

var unknown = 20,
  supply = 20,
  set = false,
  running = false,
  final;
function galvanometer(r1, r2, r3, r4, vs) {
  // Takes the 4 resistances and a supply voltage
  // outputs the galvanometer voltage
  let first = r2 / (r1 + r2),
    second = r4 / (r3 + r4);
  let vg = (first - second) * vs;
  return vg;
}

function unkownResistance(r1, r2, r3, vg, vs) {
  // Takes the first 3 resistances, galvanometer voltage and supply voltage
  // outputs the unknown resistance
  let numerator = r2 * vs - (r1 + r2) * vg;
  let denominator = r1 * vs + (r1 + r2) * vg;
  let rx = (numerator * r3) / denominator;
  return rx;
}

// Aditya Ghidora

//aditya ray----------------
function matchValues(a, b) {
  if (set && running) {
    var rs1 = document.getElementById("rs1").value;
    var rs2 = document.getElementById("rs2").value;
    var rs3 = document.getElementById("rs3").value;
    document.getElementById(b).value = document.getElementById(a).value;
    var vg = galvanometer(rs1, rs2, rs3, unknown, supply);
    document.getElementById("vg").value = vg.toPrecision(8);
    final = unkownResistance(rs1, rs2, rs3, vg, supply);
  }
}
function swap(a, b) {
  document.getElementById(b).value = document.getElementById(a).value;
}
function setResistance() {
  if (!running) {
    set = true;
    unknown = document.getElementById("rsx").value;
    supply = document.getElementById("vs").value;
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
//aditya ray----------
