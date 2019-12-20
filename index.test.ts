import { sum } from "./index";

test("sum should return 2 when arg is 1 and 1", () => {
  const actual = sum(1, 1);

  expect(2).toBe(actual);
});
