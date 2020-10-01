// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
  expect(count([{ name: "expect", amount: 1}, { name: "toBe", amount: 1}], "amount")).toBe(2);
  expect (count([{ name: 5, amount: "five"}, { name: "five", amount: 5}], "amount")).toBe(5);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
 