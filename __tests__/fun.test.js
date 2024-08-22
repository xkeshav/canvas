import { fun } from "../src/scripts/about";

import { describe, test, expect } from "@jest/globals";

describe("fun", () => {
	test("to check `document` not found error ", () => {
		fun();
		expect(fun).toBeCalled();
	});
});