function d20() {
  var roll = Math.floor((Math.random() * 20) + 1);
  document.getElementById("history").innerHTML += " " + roll + "/20";
  if (roll === 20) {
    document.getElementById("rollResult").innerHTML = "d20 roll: Nat 20!!";
  } else if (roll === 1) {
    document.getElementById("rollResult").innerHTML = "d20 roll: Critical Fail!!";
  } else {
    document.getElementById("rollResult").innerHTML = "d20 roll: " + roll;}
}

function d12() {
  var roll = Math.floor((Math.random() * 12) + 1);
  document.getElementById("history").innerHTML += " " + roll + "/12";
  document.getElementById("rollResult").innerHTML = "d12 roll: " + roll;
}

function d10() {
  var roll = Math.floor((Math.random() * 10) + 1);
  document.getElementById("history").innerHTML += " " + roll + "/10";
  document.getElementById("rollResult").innerHTML = "d10 roll: " + roll;
}

function d8() {
  var roll = Math.floor((Math.random() * 8) + 1);
  document.getElementById("history").innerHTML += " " + roll + "/8";
  document.getElementById("rollResult").innerHTML = "d8 roll: " + roll;
}

function d6() {
  var roll = Math.floor((Math.random() * 6) + 1);
  document.getElementById("history").innerHTML += " " + roll + "/6";
  document.getElementById("rollResult").innerHTML = "d6 roll: " + roll;
}

function d4() {
  var roll = Math.floor((Math.random() * 4) + 1);
  document.getElementById("history").innerHTML += " " + roll + "/4";
  document.getElementById("rollResult").innerHTML = "d4 roll: " + roll;
}