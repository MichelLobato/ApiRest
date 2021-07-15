const getMaxSum = require('./getMaxSum');

describe("Basic test for getMaxSum function", () => {
	it("should return 11 given the list [-2, 3, 5, -1, 4, -5]", () => {
		const list = [-2, 3, 5, -1, 4, -5];

		expect(getMaxSum(list)).toEqual(11);
	});
});