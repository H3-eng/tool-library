const variableType = require('./variable-type');

test('判断变量类型', () => {
  expect(variableType(123)).toBe(true);
});