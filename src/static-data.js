const shortid = require("shortid"); // erstellt eine unique ID
const txtgen = require("txtgen"); // erstellt einen Satz
const faker = require("faker"); // erstellt fake Dateien
const _ = require("lodash"); // lodash is a utility lib for Javascript

const users = generateUsers(10);
export const contacts = _.mapKeys(users, "user_id");
export const getMessages = messagesPerUser => {
  let messages = {};
  _.forEach(users, user => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number")
    };
  });
  return messages;
};


export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate()
  };
};

function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean()
  };
};

function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
};

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
};