const { detectYoungestPlayer, detectOldestPlayer, input1, input2 } = require("./problem");

const detectYoungestPlayerOutput = "Cel mai tanar are 14 ani";
const detectYoungestPlayerOutput2 = "Cel mai tanar are 11 ani";
const detectOldestPlayerOutput = "Cel mai batran are 19 ani";

test(`[${input1}] should output "${detectYoungestPlayerOutput}"`, () => {
  expect(detectYoungestPlayer(input1)).toBe(detectYoungestPlayerOutput);
});

test(`[${input2}] should output "${detectYoungestPlayerOutput2}"`, () => {
  expect(detectYoungestPlayer(input2)).toBe(detectYoungestPlayerOutput2);
});

test(`[${input1}] should output "${detectOldestPlayerOutput}"`, () => {
  expect(detectOldestPlayer(input1)).toBe(detectOldestPlayerOutput);
});

test(`[${input2}] should output "${detectOldestPlayerOutput}"`, () => {
  expect(detectOldestPlayer(input2)).toBe(detectOldestPlayerOutput);
});

