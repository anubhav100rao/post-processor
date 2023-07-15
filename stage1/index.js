const fs = require("fs");

const fileContents = fs.readFileSync("database.csv", "utf-8");

const lines = fileContents.split("\n");

const users = [];

for (const line of lines) {
  const [id, nickname, password, consent] = line.split(",");
  users.push({ id, nickname, password, consent });
}

const lastUser = users[users.length - 1];

console.log(users);

console.log(
  `The user ${lastUser.nickname} has "${lastUser.consent}" consent status for sending emails`
);

