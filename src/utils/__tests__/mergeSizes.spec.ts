import { mergeSizes } from '../mergeSizes';

describe('mergeSizes', (): void => {
  it('works with empty override array', () => {
    const res = mergeSizes([1, 2, 3, 4], []);

    expect(res).toStrictEqual([1, 2, 3, 4]);
  });

  it('merges blockStart correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [0, , , ,]);

    expect(res).toStrictEqual([0, 2, 3, 4]);
  });

  it('merges inlineEnd correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [, 0, , ,]);

    expect(res).toStrictEqual([1, 0, 3, 4]);
  });

  it('merges blockEnd correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [, , 0, ,]);

    expect(res).toStrictEqual([1, 2, 0, 4]);
  });

  it('merges inlineStart correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [, , , 0]);

    expect(res).toStrictEqual([1, 2, 3, 0]);
  });
});
