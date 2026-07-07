// index.js

// Step 0: Import datejs
require("datejs");

// Step 1: Create combineUsers function
function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  let combinedObject = {
    users: [],
  };

  // Step 3 & 4: Loop through args and merge arrays
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Get today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Step 7: Return object
  return combinedObject;
}

// Example usage
const result = combineUsers(["alice", "bob"], ["charlie", "diana"], ["eve"]);

console.log(result);
