import fs from "fs";
//const fs = require("fs");
const output = fs.readFileSync("data.txt", "utf8").split("\r\n");
console.log("output: ", output);

const customers = output.reduce((customers, currentLine) => {
  currentLine = currentLine.split(" ");
  // console.log(`current line = `, currentLine);
  // console.log(`customers = `, customers);
  const currentName = `${currentLine[0]} ${currentLine[1]}`;
  customers[currentName] = customers[currentName] || [];
  // console.log(customers[currentName]);

  customers[currentName].push({
    name: currentLine[2],
    price: currentLine[3],
    quantity: currentLine[4]
  });

  return customers;
}, {});

console.log(`final object: `, JSON.stringify(customers, null, 2));
