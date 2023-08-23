import calculate from "./calculate";

describe('Sum 2 + 2', () => {
  it('to be 4', () => {
    let data = {
      total: null,
      next: null,
      operation: null,
    };
    data = calculate(data, '2');
    console.log(data);
    data = calculate(data, '+');
    console.log(data);
    data = calculate(data, '2');
    data = calculate(data, '=');
    console.log(data);
    expect(Number(data.total)).toBe(4);
  })
});