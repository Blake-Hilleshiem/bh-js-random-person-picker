// const studentData = new Promise((resolve, reject) => {
//   try {
//     fetch("https://devpipeline-mock-api.herokuapp.com/api/get-users")
//       .then((res) => resolve(res.json()))
//       .catch((err) => new Error("Oops"));
//   } catch (err) {
//     reject(err);
//   }
// });

// async function getApiData() {
//   const data = await studentData;
//   let listOfPeople = [];

//   for (let obj of data.users) {
//     let name =
//       obj.first_name[0].toUpperCase() +
//       obj.first_name.slice(1) +
//       " " +
//       obj.last_name[0].toUpperCase() +
//       obj.last_name.slice(1);
//     listOfPeople.push(name);
//   }
//   return listOfPeople;
// }

// let listOfPeople = getApiData();
// ---------for api, code breaks later when trying to access it.

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

const rowsOfPeople = document.getElementById("list-of-people");

function createParticipants(name) {
  const listItemEl = document.createElement("div");
  listItemEl.className = "user-container";

  const listItemName = document.createElement("div");
  const listItemNameText = document.createTextNode(`${name} : `);
  listItemName.appendChild(listItemNameText);
  listItemName.className = "name-wrapper";
  listItemName.id = name;

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
  weightValue.id = name;

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

// listOfPeople.then((result) => {
//   for (let name of result) {
//     createParticipants(name);
//   }
// });
// -------- code to access api ^^^

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
let wghtLstNames = generateWeightedList(listOfPeople, lstWghts);

// listOfPeople.then((result) => {
//   let wghtLstNames = [];
//   wghtLstNames = generateWeightedList(result, lstWghts);
//   console.log(wghtLstNames);
// });
// --------------------- attempts to access api, browser crashes with this code ^^^

async function selectLuckyOne(weightedList) {
  function getIndex() {
    return new Promise((res, rej) => {
      res(Math.floor(Math.random() * (weightedList.length - 1)));
    });
  }
  let result = await getIndex();
  let person = weightedList[result];
  return person;
}

const divsOfPeople = document.getElementsByClassName("name-wrapper");
const divsOfWeights = document.getElementsByClassName("weight-value-text");
const displayName = document.getElementById("name-spinner");
const spinButton = document.getElementById("spin-button");

spinButton.addEventListener("click", () => {
  let lstWghts = generateListOfWeights(listOfElPeopleWeights);
  let wghtLstNames = generateWeightedList(listOfPeople, lstWghts);

  if (wghtLstNames.length == 0) {
    for (let div of divsOfWeights) {
      div.innerText = "1";
    }
    lstWghts = generateListOfWeights(listOfElPeopleWeights);
    wghtLstNames = generateWeightedList(listOfPeople, lstWghts);
  }
  let theOne = selectLuckyOne(wghtLstNames);
  theOne.then((response) => {
    displayName.innerText = response;
  });

  for (let div of divsOfPeople) {
    div.style = "color: white;";
    // console.dir(div);
    theOne.then((response) => {
      if (div.id == response) {
        div.style = "color:red;";
      }
    });
  }

  for (let div of divsOfWeights) {
    theOne.then((response) => {
      if (div.id == response) {
        if (div.innerText == 0) {
        } else {
          div.innerText = Number(div.innerText) - 1;
        }
      }
    });
  }
});
