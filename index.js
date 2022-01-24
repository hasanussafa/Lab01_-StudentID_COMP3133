// Name: Kazi Hasanus Safa
// ID: 101275458
const csv = require("csv-parser");
const fs = require("fs");
const inputs = [];
//Read data from input_countries.csv file
fs.createReadStream("input_countries.csv")
  .pipe(csv())
  .on("data", (data) => inputs.push(data));

const header = ["country,year,population"];
const Canada = [];
const US = [];
//Separate the data and hold on array for both countries
inputs.forEach((input) => {
  if (input.country === "Canada")
    Canada.push(`${input.country},${input.year},${input.population}`);
  if (input.country === "United States")
    US.push(`${input.country},${input.year},${input.population}`);
});
// existing file check for canada.txt
try {
  if(fs.existsSync('canada.txt')) {
    var filePath = 'canada.txt'; 
    fs.unlinkSync(filePath);
  } else {
      console.log('canada.txt does not exist!');
  }
} catch (err) {
  console.error(err);
}

//Write data in canada.txt file
fs.writeFile("canada.txt", header.concat(Canada).join("\n"), (err) => {
  if (err) {
    console.log("Sorry", err);
  } else {
    console.log(`Successfully saved in Canada.txt file!`);
  }
});
// existing file check for usa.txt
try {
  if(fs.existsSync('usa.txt')) {
    var filePath = 'usa.txt'; 
    fs.unlinkSync(filePath);
  } else {
      console.log('usa.txt does not exist!');
  }
} catch (err) {
  console.error(err);
}

//write data in usa.txt file
fs.writeFile("usa.txt", header.concat(US).join("\n"), (err) => {
  if (err) {
    console.log("Sorry", err);
  } else {
    console.log(`Successfully saved in usa.txt file`);
  }
});