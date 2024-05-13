import { describe, expect, test } from "@jest/globals";
import { varnmala } from "../src/common/utils";

describe("Utils module", () => {
  test("should have varnmala", () => {
    expect(varnmala).toBeDefined();
		console.log({varnmala});
  });
});