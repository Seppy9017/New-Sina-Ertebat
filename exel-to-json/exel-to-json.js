const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("products.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
console.log("data.json ساخته شد ✅");
