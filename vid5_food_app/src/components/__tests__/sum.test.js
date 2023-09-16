import { sum, product } from "../sum";

// -----------------sum

test("check sum of 2 posivite numbers", () => {
  expect(sum(4, 2)).toBe(6);
});

test("check sum of 1 posivite, 1 negetive  number", () => {
  expect(sum(4, -2)).toBe(2);
});

test("check sum of 2 negetive  numbers", () => {
  expect(sum(-6, -2)).toBe(-8);
});

// --------------product

test("check product of 2 posivite numbers", () => {
  expect(product(4, 2)).toBe(8);
});

test("check product of 2 negative numbers", () => {
  expect(product(-4, -2)).toBe(8);
});
