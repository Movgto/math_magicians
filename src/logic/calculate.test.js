import calculate from './calculate';

describe('Sum', () => {
  test('2 + 4 equals 6', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '2');
    data = calculate(data, '+');
    data = calculate(data, '4');
    data = calculate(data, '=');
    expect(Number(data.total)).toBe(6);
  });
});

describe('Substract', () => {
  test('4 - 2 equals 2', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '4');
    data = calculate(data, '-');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(Number(data.total)).toBe(2);
  });
});

describe('Divide', () => {
  test('10 divided by 2 equals 5', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '10');
    data = calculate(data, '÷');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(Number(data.total)).toBe(5);
  });
});

describe('Clear', () => {
  test('pressing "AC" should clear the operation, and total should be null', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '10');
    data = calculate(data, '÷');
    data = calculate(data, '2');
    data = calculate(data, 'AC');
    data = calculate(data, '=');
    expect(Number(data.total)).toBeNaN();
  });
});

describe('Sign swap', () => {
  test('the result should invert its sign', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '10');
    data = calculate(data, '+');
    data = calculate(data, '5');
    data = calculate(data, '=');
    data = calculate(data, '+/-');
    expect(Number(data.total)).toBe(-15);
  });
});

describe('Decimal', () => {
  test('decilmals work properly', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '10');
    data = calculate(data, '.');
    data = calculate(data, '5');
    data = calculate(data, '+');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(Number(data.total)).toBe(12.5);
  });
});
