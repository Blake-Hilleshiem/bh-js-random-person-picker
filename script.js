let apiGet = {
  message: "Users found",
  users: [
    {
      id: 1,
      first_name: "jacob",
      last_name: "grimshaw",
    },
    {
      id: 2,
      first_name: "mike",
      last_name: "caldwell",
    },
    {
      id: 3,
      first_name: "blake",
      last_name: "hilleshiem",
    },
    {
      id: 4,
      first_name: "dakotah",
      last_name: "holmes",
    },
    {
      id: 5,
      first_name: "amee",
      last_name: "brisk",
    },
    {
      id: 6,
      first_name: "arianne",
      last_name: "mix",
    },
    {
      id: 7,
      first_name: "arlen",
      last_name: "runolfson",
    },
    {
      id: 8,
      first_name: "elle",
      last_name: "laulu",
    },
    {
      id: 9,
      first_name: "ian",
      last_name: "miller",
    },
    {
      id: 10,
      first_name: "matt",
      last_name: "caldwell",
    },
    {
      id: 11,
      first_name: "sarah",
      last_name: "roy",
    },
    {
      id: 12,
      first_name: "tanya",
      last_name: "hamner",
    },
  ],
};
// --------- api portion ^^^
// console.log(apiGet.users[0].first_name);

let listOfPeople = [];
for (let obj of apiGet.users) {
  let name =
    obj.first_name[0].toUpperCase() +
    obj.first_name.slice(1) +
    " " +
    obj.last_name[0].toUpperCase() +
    obj.last_name.slice(1);
  listOfPeople.push(name);
}

// ----- list of People ^^^

// function increaseWeight(user) {
//   listOfPeople.push(user);
// }

// function getIndex() {
//   return new Promise((res, rej) => {
//     res(Math.floor(Math.random() * (listOfPeople.length - 1)));
//   });
// }

// let listOfWeights = generateListOfWeights(listOfElPeopleWeights);
// console.log(generateWeightedList(listOfPeople, listOfWeights));

// async function selectLuckyOne() {
//   let result = await getIndex();

//   let person = listOfPeople[result];

//   // listOfPeople.splice(result, 1);

//   return person;
// }
// -------------------------- was working ^^^
const rowsOfPeople = document.getElementById("list-of-people");

function createParticipants(name) {
  const listItemEl = document.createElement("div");
  listItemEl.className = "user-container";
  listItemEl.id = name;

  const listItemName = document.createElement("div");
  const listItemNameText = document.createTextNode(`${name} : `);
  listItemName.appendChild(listItemNameText);
  listItemName.className = "name-wrapper";

  const valueTracker = document.createElement("div");
  valueTracker.className = "value-tracker-wrapper";

  const upWeightBtn = document.createElement("button");
  const upWeightBtnIcon = document.createTextNode("+");
  upWeightBtn.appendChild(upWeightBtnIcon);
  upWeightBtn.className = "increaseBtn";

  const weightValue = document.createElement("div");
  const weightValueText = document.createTextNode("1");
  weightValue.appendChild(weightValueText);
  weightValue.className = "weight-value-text";

  const lowerWeightBtn = document.createElement("button");
  const lowerWeightBtnIcon = document.createTextNode("-");
  lowerWeightBtn.appendChild(lowerWeightBtnIcon);
  lowerWeightBtn.className = "decreaseBtn";

  valueTracker.appendChild(lowerWeightBtn);
  valueTracker.appendChild(upWeightBtn);

  listItemEl.appendChild(listItemName);
  listItemName.appendChild(weightValue);
  listItemEl.appendChild(valueTracker);

  rowsOfPeople.appendChild(listItemEl);

  upWeightBtn.addEventListener("click", () => {
    weightValue.innerText = Number(weightValue.innerText) + 1;
    lowerWeightBtn.disabled = false;
  });

  lowerWeightBtn.addEventListener("click", () => {
    weightValue.innerText = Number(weightValue.innerText) - 1;
    if (Number(weightValue.innerText) == 0) {
      lowerWeightBtn.disabled = true;
    }
  });
}

for (let name of listOfPeople) {
  createParticipants(name);
}

// -------- fills Dom with names ^^^

const listOfElPeopleWeights =
  document.getElementsByClassName("weight-value-text");

const generateListOfWeights = (listOfEl) => {
  let listOfWeights = [];
  for (el of listOfEl) {
    listOfWeights.push(el.innerText);
  }
  return listOfWeights;
};

function generateWeightedList(listOfNames, listOfValues) {
  function customRange(num) {
    let timesToRun = [];
    while (num != 0) {
      timesToRun.push("");
      num--;
    }
    return timesToRun;
  }
  let weightedListOfPeople = [];
  indexCount = 0;
  for (let name of listOfNames) {
    for (let i in customRange(listOfValues[indexCount])) {
      weightedListOfPeople.push(name);
    }
    indexCount++;
  }
  return weightedListOfPeople;
}

let lstWghts = generateListOfWeights(listOfElPeopleWeights);
console.log(lstWghts);
let wghtLstNames = generateWeightedList(listOfPeople, lstWghts);
console.log(wghtLstNames);

// --------------------- generates weighted list ^^^

async function selectLuckyOne(weightedList) {
  function getIndex() {
    return new Promise((res, rej) => {
      res(Math.floor(Math.random() * (weightedList.length - 1)));
    });
  }
  let result = await getIndex();
  let person = weightedList[result];
  // listOfPeople.splice(result, 1);
  return person;
}

let theOne = selectLuckyOne(wghtLstNames);
theOne.then((response) => console.log(response));

// console.log(theOne);
// console.log(returnName());
// ----------------------- gets name from list ^^^

function increaseWeight(user) {
  listOfPeople.push(user);
}

const divsOfPeople = document.getElementsByClassName("name-wrapper");
const displayName = document.getElementById("name-spinner");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  // async function generateDisplay() {
  //   let person = await selectLuckyOne();
  //   displayName.innerText = person;
  //   displayName.innerText = person;
  // }
  // let person = generateDisplay();
  let lstWghts = generateListOfWeights(listOfElPeopleWeights);
  console.log(lstWghts);
  let wghtLstNames = generateWeightedList(listOfPeople, lstWghts);
  console.log(wghtLstNames);
  console.log(wghtLstNames);
  let theOne = selectLuckyOne(wghtLstNames);
  theOne.then((response) => {
    displayName.innerText = response;
  });

  // for (let div of divsOfPeople) {
  //   div.style = "color: white;";
  //   console.log(div.innerText);
  //   if (div.innerText == `${person} : `) {
  //     div.style = "color:red;";
  //   }
  // }
});

// let listOfValues = generateListOfWeights(listOfElPeopleWeights);
// weightedList = generateWeightedList(listOfPeople, listOfValues);
// console.log(selectLuckyOne(weightedList));
// *********************************************************

// function createUser(text) {
//   const completeBtn = document.createElement("button");
//   const completeIcon = document.createTextNode("✓");
//   completeBtn.appendChild(completeIcon);
//   completeBtn.className = "mark-complete";

//   const delItemBtn = document.createElement("button");
//   const delItemIcon = document.createTextNode("X");
//   delItemBtn.appendChild(delItemIcon);
//   delItemBtn.className = "delete-item";

//   const listItemEl = document.createElement("div");
//   const listItemText = document.createTextNode(text);
//   listItemEl.className = "list-item";

//   listItemEl.appendChild(completeBtn);
//   listItemEl.appendChild(delItemBtn);
//   listItemEl.appendChild(listItemText);

//   rowsOfPeople.appendChild(listItemEl);

//   let delButtons = document.getElementsByClassName("delete-item");
//   for (let listItem of delButtons) {
//     listItem.onclick = function () {
//       let item = this.parentElement;
//       item.style.display = "none";
//     };
//   }

//   let completeButtons = document.getElementsByClassName("mark-complete");
//   for (let listItem of completeButtons) {
//     listItem.onclick = function () {
//       let item = this.parentElement;
//       completedList.appendChild(item);
//       // item.style.display = "none";
//     };
//   }
// }

// createUser("blake Hilleshiem");

// console.log(listOfPeople);
// console.log(
//   listOfPeople.filter((value) => {
//     console.log(value);
//     value == "Blake Hilleshiem";
//   })
// );

// --------------------------------

// const listOfElPeopleWeights =
//   document.getElementsByClassName("weight-value-text");

// function customRange(num) {
//   let timesToRun = [];
//   while (num != 0) {
//     timesToRun.push("");
//     num--;
//   }
//   return timesToRun;
// }

// const generateListOfWeights = (listOfEl) => {
//   let listOfWeights = [];
//   for (el of listOfEl) {
//     listOfWeights.push(el.innerText);
//   }
//   return listOfWeights;
// };

// const generateWeightedList = (listOfNames, listOfValues) => {
//   let weightedListOfPeople = [];
//   indexCount = 0;
//   for (let name of listOfNames) {
//     for (let i in customRange(listOfValues[indexCount])) {
//       weightedListOfPeople.push(name);
//     }
//     indexCount++;
//   }
//   return weightedListOfPeople;
// };

// let listOfWeights = generateListOfWeights(listOfElPeopleWeights);
// console.log(generateWeightedList(listOfPeople, listOfWeights));

// ---------------------^^^^

// console.log(weightedListOfPeople);
// console.log(listOfPeople);
// generateWeightedList(listOfPeople, [0, 0, 1, 2, 0, 0, 3, 0, 4, 0, 5, 1]);
// console.log(weightedListOfPeople);

// ---------- working add function

// function createParticipants(name) {
//   const listItemEl = document.createElement("div");
//   listItemEl.className = "user-container";
//   listItemEl.id = name;

//   const listItemName = document.createElement("div");
//   const listItemNameText = document.createTextNode(name);
//   listItemName.appendChild(listItemNameText);
//   listItemName.className = "name-wrapper";

//   const valueTracker = document.createElement("div");
//   valueTracker.className = "value-tracker-wrapper";

//   const upWeightBtn = document.createElement("button");
//   const upWeightBtnIcon = document.createTextNode(">");
//   upWeightBtn.appendChild(upWeightBtnIcon);
//   upWeightBtn.className = "increaseBtn";

//   const weightValue = document.createElement("div");
//   // weightValue.innerText = "0";
//   const weightValueText = document.createTextNode("0");
//   weightValue.appendChild(weightValueText);

//   const lowerWeightBtn = document.createElement("button");
//   const lowerWeightBtnIcon = document.createTextNode("<");
//   lowerWeightBtn.appendChild(lowerWeightBtnIcon);
//   lowerWeightBtn.className = "decreaseBtn";

//   valueTracker.appendChild(lowerWeightBtn);
//   valueTracker.appendChild(weightValue);
//   valueTracker.appendChild(upWeightBtn);

//   listItemEl.appendChild(listItemName);
//   listItemEl.appendChild(valueTracker);

//   rowsOfPeople.appendChild(listItemEl);

//   upWeightBtn.addEventListener("click", () => {
//     weightValue.innerText = Number(weightValue.innerText) + 1;
//     // console.log(listItemName.innerText);
//     // ---------
//     // listOfPeople.push(listItemName.innerText);
//     // console.log(listOfPeople);
//   });

//   lowerWeightBtn.addEventListener("click", () => {
//     weightValue.innerText = Number(weightValue.innerText) - 1;
//     // console.log(listItemName.innerText);
//     // ------
//     // listOfPeople.push(listItemName.innerText);
//     // console.log(listOfPeople);
//   });
// }

// -----------------------------------

// async function getSwapi() {
//   const data = await fetch()
//   console.log("1", data);
//   console.log();
//   console.log("2", data.result.properties.name);
// }

// -------
// const swapiData = new Promise((resolve, reject) => {
//   try {
//     fetch("https://www.swapi.tech/api/people/1")
//       .then((res) => resolve(res.json()))
//       .catch((err) => new Error("Oops"));
//   } catch (err) {
//     reject(err);
//   }
// });

// async function getSwapi() {
//   const data = await swapiData;

//   console.log("1", data);
//   console.log();
//   console.log("2", data.result.properties.name);
// }
// // async function getSwapi() {
// //   const data = await fetch()
// //   console.log("1", data);
// //   console.log();
// //   console.log("2", data.result.properties.name);
// // }
// // ^^ what you would do realistically

// getSwapi();
