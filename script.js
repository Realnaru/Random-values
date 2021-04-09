const scale0 = +document.getElementById('scale0').value;
const scale1 = +document.getElementById('scale1').value;
const scale2 = +document.getElementById('scale2').value;
const scale3 = +document.getElementById('scale3').value;
const scale4 = +document.getElementById('scale4').value;
const errorRate = +document.getElementById('error').value;


document.querySelector("#vertical").addEventListener("click", () => addVerticalRows());

document.querySelector("#horizontal").addEventListener("click", () => addHorizzontalRows());



//adds needed amount of 5 row blocks with randon values to first table
function addVerticalRows() {

  let myTable = document.getElementById("vertical-table");
  let blocks = +document.getElementById("rows").value;

  for (let i = 0; i < blocks; i++) {
    for (let j = 0; j < 5; j++) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.setAttribute("style", "border: 1px solid black");
      td.innerText = calculateFinalValue(+document.querySelector("#scale" + j).value);
      tr.appendChild(td);
      myTable.appendChild(tr);
    }
  }
}


//adds nedded amount of rows of 5 random values to second table
function addHorizzontalRows() {

  let myTable = document.getElementById("horizontal-table");
  let rows = +document.getElementById("rows").value;

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    myTable.appendChild(tr);
    for (let j = 0; j < 5; j++) {
      let td = document.createElement("td");
      td.setAttribute("style", "border: 1px solid black; width: 50px;");
      td.innerText = calculateFinalValue(+document.querySelector("#scale" + j).value);
      tr.appendChild(td);
    }
  }
}

//calculate maximum allowed error
function calculateError() {
  let errorRate = document.querySelector("#error").value;
  let scaleTop = document.querySelector("#scale4").value;
  return scaleTop * errorRate / 100;
  }

//calculate random error within given range
function calculateRandomError() {
  let range = calculateError();
  return (Math.random() < 0.5) ? (getRandomArbitrary(0.01, range)) : -1 * (getRandomArbitrary(0.01, range));
}

//calculate random value within given range
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//calculate final value to insert in table
function calculateFinalValue(value){
  let result = value + calculateRandomError();
  return result.toFixed(3).toString().replace(".", ",");
}
