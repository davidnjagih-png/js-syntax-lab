const { combineUsers } = require("../index.js");

describe("combineUsers function return", () => {
  const combine = combineUsers(
    ["Jim3", "Pam5", "Dwight77"],
    ["Michael6", "Eleanor22", "Chidi202"],
    ["Jack_jack", "Julia_Oreo", "Bill_bore"],
  );

  test("should be an object", () => {
    expect(typeof combine).toBe("object");
  });

  test("should contain merged users", () => {
    expect(combine.users).toEqual(
      expect.arrayContaining([
        "Jim3",
        "Pam5",
        "Dwight77",
        "Michael6",
        "Eleanor22",
        "Chidi202",
        "Jack_jack",
        "Julia_Oreo",
        "Bill_bore",
      ]),
    );
  });

  test("should have a merge_date in M/d/yyyy format", () => {
    expect(combine.merge_date).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
  });
});
