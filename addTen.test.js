const addTen = require('./addTen');

test('returns the number plus 10', () => {
	expect(addTen(1)).toBe(2);
});
