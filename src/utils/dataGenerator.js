/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// tweet resource strings
var opening = [
  "just",
  "",
  "",
  "",
  "",
  "ask me how i",
  "completely",
  "nearly",
  "productively",
  "efficiently",
  "last night i",
  "the president",
  "that wizard",
  "a ninja",
  "a seedy old man",
];
var verbs = [
  "downloaded",
  "interfaced",
  "deployed",
  "developed",
  "built",
  "invented",
  "experienced",
  "navigated",
  "aided",
  "enjoyed",
  "engineered",
  "installed",
  "debugged",
  "delegated",
  "automated",
  "formulated",
  "systematized",
  "overhauled",
  "computed",
];
var objects = [
  "my",
  "your",
  "the",
  "a",
  "my",
  "an entire",
  "this",
  "that",
  "the",
  "the big",
  "a new form of",
];
var nouns = [
  "cat",
  "koolaid",
  "system",
  "city",
  "worm",
  "cloud",
  "potato",
  "money",
  "way of life",
  "belief system",
  "security system",
  "bad decision",
  "future",
  "life",
  "pony",
  "mind",
];
var tags = [
  "#techlife",
  "#burningman",
  "#sf",
  "but only i know how",
  "for real",
  "#sxsw",
  "#ballin",
  "#omg",
  "#yolo",
  "#magic",
  "",
  "",
  "",
  "",
];

// set up data structures
export const streams = {
  home: [],
  users: {
    shawndrost: [],
    sharksforcheap: [],
    mracus: [],
    douglascalhoun: [],
  },
};

// utility function to generate random usernames
var generateRandomUsername = function (verb, noun) {
  noun = noun.replace(/ /g, "");
  return verb + noun;
};

// utility function
var randomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var randomMessage = function () {
  return [
    randomElement(opening),
    randomElement(verbs),
    randomElement(objects),
    randomElement(nouns),
    randomElement(tags),
  ].join(" ");
};

// generate random tweets on a random schedule
var generateRandomTweet = function () {
  var tweet = {};
  tweet.user = randomElement(Object.keys(streams.users));

  tweet.message = randomMessage();
  tweet.createdAt = new Date();
  var userIndex = Object.keys(streams.users).indexOf(tweet.user);
  tweet.profilePhotoURL = "images/user-" + userIndex + ".png";
  addTweet(tweet);
};

// /Users/lisifun/src/hack-reactor/seip2310-twiddler-react/twiddler-app/src/utils/dataGenerator.js

// generate random usernames
for (var i = 0; i < 3; i++) {
  var newUser = generateRandomUsername(
    randomElement(verbs),
    randomElement(nouns)
  );
  streams.users[newUser] = [];
}

// set up users data structure
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function (newTweet) {
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

var hoursToRemove = 50;
for (var i = 0; i < 10; i++) {
  // generating a tweet
  generateRandomTweet();

  // change the tweet's time of creation to a time in the past
  var timeofCreation = streams.home[i].createdAt;
  timeofCreation.setHours(timeofCreation.getHours() - hoursToRemove);
  hoursToRemove -= 5;
}

var scheduleNextTweet = function () {
  if (streams.home.length < 500) {
    generateRandomTweet();
    setTimeout(scheduleNextTweet, 250 + Math.random() * 1250);
  }
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
// var writeTweet = function (message) {
//   throw new Error("Lisandra eres una balsera");
// if (!visitor) {
//   throw new Error("set the global visitor property!");
// }
// if (!streams.users[visitor]) {
//   streams.users[visitor] = [];
// }
// var tweet = {};
// tweet.user = visitor;
// tweet.message = message;
// tweet.createdAt = new Date();
// tweet.profilePhotoURL = "./assets/img/visitor.png";
// addTweet(tweet);
// };

// console.log(streams);
//console.log(streams.home);
// console.log(streams.users);

console.log("hey sister");
