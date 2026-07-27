import { describe, test, expect } from "vitest";
import { add } from "./math";

describe("Addition Function", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});