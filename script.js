const scale0 = +document.getElementById('scale0').value;
const scale1 = +document.getElementById('scale1').value;
const scale2 = +document.getElementById('scale2').value;
const scale3 = +document.getElementById('scale3').value;
const scale4 = +document.getElementById('scale4').value;
const errorRate = +document.getElementById('error').value;


document.querySelector("#vertical").addEventListener("click", () => addVerticalRows());

document.querySelector("#horizontal").addEventListener("click", () => addHorizzontalRows());

document.querySelector("#fromArray").addEventListener("click", () => addHorizontalRowsFromArray());

document.querySelector("#fromArrayVert").addEventListener("click", () => addVerticalRowsFromArray());



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
      td.setAttribute("style", "border: 1px solid black; width: 50px; font-size: 10px; font-family: 'Times New Roman';");
      td.innerText = calculateFinalValue(+document.querySelector("#scale" + j).value);
      tr.appendChild(td);
    }
  }
}

//generate horizontal table rows from textarea input
function addHorizontalRowsFromArray() {
  let myTable = document.getElementById("horizontal-table");
  const array = document.querySelector("#array-input").value.replaceAll("\t", " ").replaceAll("\n", " ").trim().replaceAll(",",".").split(" ");
  
  for (let i = 4; i < array.length; i += 5) {
      let tr = document.createElement("tr");
      myTable.appendChild(tr);
      for (let j = i - 4; j <= i; j++) {
         let td = document.createElement("td");
         td.setAttribute("style", "border: 1px solid black; width: 50px; font-size: 10px; font-family: 'Times New Roman'");
         td.innerText = calculateFinalValue(+array[j], +array[i]);
         tr.appendChild(td);
      }
    }
}

//add vertical table rows from atexarea input
function addVerticalRowsFromArray() {
  let myTable = document.getElementById("vertical-table");
  const array = document.querySelector("#array-input").value.replaceAll("\t", " ").replaceAll("\n", " ").trim().replaceAll(",",".").split(" ");

  for (let i = 0; i < array.length; i += 5) {
      for (let j = 0; j < 5; j++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
         myTable.appendChild(tr);
         td.innerText = calculateFinalValue(+array[j], +array[i]);
         td.setAttribute("style", "border: 1px solid black; width: 50px; font-size: 10px; font-family: 'Times New Roman'");
         tr.appendChild(td);
      }
    }
}

//calculate maximum allowed error, if no parameter then it uses default case - document.querySelector("#scale4").value
function calculateError(scaleTop = document.querySelector("#scale4").value) {
  let errorRate = document.querySelector("#error").value;
  // let scaleTop = document.querySelector("#scale4").value;
  return scaleTop * errorRate / 100;
  }

//calculate random error within given range if no parameters, then default, if there is uses the parameter
function calculateRandomError(scaleTop) {
  let range = calculateError(scaleTop);
  return (Math.random() < 0.5) ? (getRandomArbitrary(0, range)) : -1 * (getRandomArbitrary(0, range));
}

//calculate random value within given range
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//calculate final value to insert in table by defaul uses parameter from scaleTop if there is second parameter uses it
function calculateFinalValue(value, scaleTop){
  let result = value + calculateRandomError(scaleTop);
  const amountOfSigns = +document.querySelector("#signs").value;
  return result.toFixed(amountOfSigns).toString().replace(".", ",");
}
