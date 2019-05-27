import * as app from './cal';
import * as math from './math';

// jest.mock('./math', () => ({
//   add: jest.fn(() => 'add'),
//   subtract: () => 'subtract'
// }));

jest.mock('./math');

const mathMock = math as jest.Mocked<typeof math>;

it('calls math.add', () => {
  (math.add as jest.Mock).mockReturnValue('add');
  const result = app.doAdd(1, 2);
  expect(result).toBe('add');

  mathMock.add.mockRestore();
  expect(app.doAdd(1, 2)).toBeUndefined();
});

it('calls math.subtract', () => {
  (math.subtract as jest.Mock).mockReturnValue('subtract');
  const result = app.doSubtract(1, 2);
  expect(result).toBe('subtract');

  const actualMath = jest.requireActual('./math');
  const result2 = actualMath.subtract(1, 2);
  expect(result2).toBe(-1);
});
