
let outputscreen = document.getElementById("display");

function display(num) {
  outputscreen.value += num;
}
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    alert("Invalid");
  }
}
function clear() {
  outputscreen.value = '';
}
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
function alerti(){
  alert("This button is disabled.")
}
