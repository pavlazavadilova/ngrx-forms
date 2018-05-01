import { notEqualTo } from './not-equal-to';

describe(notEqualTo.name, () => {
  it('should not return an error if value is not equal to comparand', () => {
    expect(notEqualTo(1)(0)).toEqual({});
  });

  it('should return an error if value is equal to comparand', () => {
    expect(notEqualTo(1)(1)).not.toEqual({});
  });

  it('should return errors with comparand and actual properties', () => {
    const comparand = 1;
    const actualValue = 1;
    expect(notEqualTo(comparand)(actualValue)).toEqual({
      notEqualTo: {
        comparand,
        actual: actualValue,
      },
    });
  });
});