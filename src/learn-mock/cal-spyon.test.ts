import * as app from './cal';
import * as math from './math';

jest.spyOn(math, 'multiply').mockReturnValue(100);

it('calls math.multiply', () => {
  const result = app.doMultiply(1, 2);
  expect(result).toBe(100);

  (math.multiply as jest.Mock).mockRestore();
  expect(app.doMultiply(1, 2)).toBe(2);
});
