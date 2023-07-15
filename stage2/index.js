const fs = require("fs");
const crypto = require("node:crypto");

const fileContents = fs.readFileSync("database.csv", "utf-8");

const lines = fileContents.split("\n");

const users = [];

for (const line of lines) {
  const [id, nickname, password, consent] = line.split(",");
  users.push({ id, nickname, password, consent });
}

users.shift();

fs.writeFileSync(
  "hash_database.csv",
  "id, nickname, password, consent to mailing\n"
);

const lastUser = users[users.length - 1];

// encrypt all user passwords

for (const user of users) {  
  const hashedPassword = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");
  fs.appendFileSync(
    "hash_database.csv",
    `${user.id}, ${user.nickname}, ${hashedPassword}, ${user.consent}\n`
  );
}