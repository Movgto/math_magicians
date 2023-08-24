import operate from './operate';

test('adds two numbers', () => {
  expect(operate('2', '3', '+')).toBe('5');
});

test('subtracts two numbers', () => {
  expect(operate('5', '3', '-')).toBe('2');
});

test('multiplies two numbers', () => {
  expect(operate('2', '3', 'x')).toBe('6');
});

test('divides two numbers', () => {
  expect(operate('6', '2', '÷')).toBe('3');
});

test('handles division by zero', () => {
  expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
});

test('calculates modulo', () => {
  expect(operate('7', '3', '%')).toBe('1');
});

test('handles modulo with divisor as zero', () => {
  expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
});

test('throws error for unknown operation', () => {
  expect(() => operate('2', '3', '@')).toThrow("Unknown operation '@'");
});
