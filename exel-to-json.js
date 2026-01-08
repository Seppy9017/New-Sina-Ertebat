const XLSX = require("xlsx");
const fs = require("fs");

// خواندن فایل اکسل
const workbook = XLSX.readFile("products.xlsx");

// انتخاب شیت اول
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// تبدیل به JSON
const data = XLSX.utils.sheet_to_json(sheet);

// ذخیره به صورت data.json
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("✅ data.json ساخته شد");
