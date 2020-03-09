const usersById = {
  "5": { id: "5", name: "Adam", registered: true },
  "27": { id: "27", name: "Bobby", registered: true },
  "32": { id: "32", name: "Clarence", registered: false },
  "39": { id: "39", name: "Danielle", registered: true },
  "42": { id: "42", name: "Ekaterina", registered: false }
};

const getRegisteredUsers = obj => {
  let filteredObj = {};
  for (let item of Object.entries(obj)) {
    let [key, value] = item;
    if (value.registered) {
      filteredObj[key] = value;
    }
  }
  return filteredObj;
};

const getRegisteredUsersArr = obj => {
  let keysArr = Object.keys(obj);
  keysArr = keysArr.map(item => {
    return {
      [item]: obj[item]
    }; // leaves the nesting and 'id: obj' KVP structure intact
  });
  return keysArr.filter(el => el[Object.keys(el)].registered);
};

console.log(getRegisteredUsers(usersById));
console.log("");
console.log(getRegisteredUsersArr(usersById));
