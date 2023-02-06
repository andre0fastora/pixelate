// Your code here
let tableList = document.getElementsByTagName(`table`);
let table = tableList[0];
let addRowButton = document.getElementById("add-row");
let selectList = document.getElementsByTagName(`select`);
let select = selectList[0];

let chosenColor = ``;

addRowButton.addEventListener(`click`, makeRow);

table.addEventListener(`mousedown`, (e) => {
  colorize(e);
});

select.addEventListener(`click`, (e) => {
  chosenColor = e.target.value;
});

function colorize(e) {
  if (e.target.tagName === `TD`) {
    if (e.target.className === ``) {
      e.target.className = chosenColor;
    } else if (e.target.className !== ``) {
      e.target.className = ``;
    }
  }
}

function makeRow() {
  let newTr = document.createElement(`tr`);
  for (let i = 0; i < 21; i++) {
    let newTd = document.createElement(`td`);
    newTr.appendChild(newTd);
  }
  table.appendChild(newTr);
}
