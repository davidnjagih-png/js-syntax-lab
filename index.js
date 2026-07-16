// Step 0: Import datejs
require("datejs");

function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: [],
  };

  // Step 3 & 4: Loop through args and merge arrays
  for (const arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Step 7: Return object
  return combinedObject;
}

// Export function so tests can use it
module.exports = { combineUsers };
