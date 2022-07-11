let listOfPeople = [];

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

// console.log(apiGet.users[0].first_name);

for (let obj of apiGet.users) {
  let name =
    obj.first_name[0].toUpperCase() +
    obj.first_name.slice(1) +
    " " +
    obj.last_name[0].toUpperCase() +
    obj.last_name.slice(1);
  listOfPeople.push(name);
}

function increaseWeight(user) {
  listOfPeople.push(user);
}

function getIndex() {
  return new Promise((res, rej) => {
    res(Math.floor(Math.random() * (listOfPeople.length - 1)));
  });
}

async function selectLuckyOne() {
  // let index = Math.floor(Math.random() * (13 - 0) + 0);
  result = await getIndex();
  // console.log(result);
  // console.log(listOfPeople[result]);
  listOfPeople.splice(result, 1);
  // console.log(listOfPeople);
}

increaseWeight(listOfPeople[2]);
increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// increaseWeight(listOfPeople[2]);
// console.log(listOfPeople);

// selectLuckyOne();

// console.log(Math.floor(Math.random() * (13 - 0) + 0));
const rowsOfPeople = document.getElementById("list-of-people");

function createParticipants(name) {
  const listItemEl = document.createElement("div");
  listItemEl.className = "user-container";
  listItemEl.id = name;

  const listItemName = document.createElement("div");
  const listItemNameText = document.createTextNode(name);
  listItemName.appendChild(listItemNameText);
  listItemName.className = "name-wrapper";

  const valueTracker = document.createElement("div");
  valueTracker.className = "value-tracker-wrapper";

  const upWeightBtn = document.createElement("button");
  const upWeightBtnIcon = document.createTextNode(">");
  upWeightBtn.appendChild(upWeightBtnIcon);
  upWeightBtn.className = "increaseBtn";

  const weightValue = document.createElement("div");
  // weightValue.innerText = "0";
  const weightValueText = document.createTextNode("0");
  weightValue.appendChild(weightValueText);

  const lowerWeightBtn = document.createElement("button");
  const lowerWeightBtnIcon = document.createTextNode("<");
  lowerWeightBtn.appendChild(lowerWeightBtnIcon);
  lowerWeightBtn.className = "decreaseBtn";

  valueTracker.appendChild(lowerWeightBtn);
  valueTracker.appendChild(weightValue);
  valueTracker.appendChild(upWeightBtn);

  listItemEl.appendChild(listItemName);
  listItemEl.appendChild(valueTracker);

  rowsOfPeople.appendChild(listItemEl);

  upWeightBtn.addEventListener("click", () => {
    weightValue.innerText = Number(weightValue.innerText) + 1;
    // console.log(listItemName.innerText);
    // ---------
    // listOfPeople.push(listItemName.innerText);
    // console.log(listOfPeople);
  });

  lowerWeightBtn.addEventListener("click", () => {
    weightValue.innerText = Number(weightValue.innerText) - 1;
    // console.log(listItemName.innerText);
    // ------
    // listOfPeople.push(listItemName.innerText);
    // console.log(listOfPeople);
  });
}

for (let name of listOfPeople) {
  createParticipants(name);
}

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

let multiplierRef = {
  "Blake Hilleshiem": 1,
  "Arlen Runolfuson": 1,
  "Jacob Grimshaw": 1,
};

multiplierRef["Blake Hilleshiem"] = 2;

let constructList = [];
for (let key in multiplierRef) {
  console.log(key);
  console.log(multiplierRef[key]);
}

console.log(constructList);
