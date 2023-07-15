const { log } = require("console");
const crypto = require("crypto");
const fs = require("fs");

let data = fs.readFileSync("database.csv", "utf8");

let lines = data.split("\n");

let hashData = [];

for (let i = 1; i < lines.length; i++) {
  let fields = lines[i].split(", ");
  if (fields.length === 4 && fields[2] !== "-") {
    let hash = crypto.createHash("sha256");
    hash.update(String(fields[2]));
    fields[2] = hash.digest("hex");

    hashData.push(fields.join(", "));
  }
}

let output = "id, nickname, password, consent to mailing\n";
output += hashData.join("\n");

const rows = output.split("\n");
const users = [];
for (const row of rows) {
  const [id, nickname, password, consent] = row.split(", ");
  users.push({ id, nickname, password, consent });
}

let filteredOutput = "";

for (const row of rows) {
  const [id, nickname, password, consent] = row.split(", ");

  filteredOutput +=
    id + ", " + nickname + ", " + password + ", " + consent + "\n";
}

fs.writeFileSync("hash_database.csv", filteredOutput);
