import { mergeSizes } from '../mergeSizes';

describe('mergeSizes', (): void => {
  it('should work with empty override array', () => {
    const res = mergeSizes([1, 2, 3, 4], []);

    expect(res).toStrictEqual([1, 2, 3, 4]);
  });

  it('should merge blockStart correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [0, undefined, undefined, undefined]);

    expect(res).toStrictEqual([0, 2, 3, 4]);
  });

  it('should merge inlineEnd correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [undefined, 0, undefined, undefined]);

    expect(res).toStrictEqual([1, 0, 3, 4]);
  });

  it('should merge blockEnd correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [undefined, undefined, 0, undefined]);

    expect(res).toStrictEqual([1, 2, 0, 4]);
  });

  it('should merge inlineStart correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [undefined, undefined, undefined, 0]);

    expect(res).toStrictEqual([1, 2, 3, 0]);
  });

  it('should merge inline axis correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [undefined, 0]);

    expect(res).toStrictEqual([1, 0, 3, 0]);
  });

  it('should merge block axis correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [0, undefined]);

    expect(res).toStrictEqual([0, 2, 0, 4]);
  });

  it('should merge 3 value override correctly', () => {
    const res = mergeSizes([1, 2, 3, 4], [5, 6, 7]);

    expect(res).toStrictEqual([5, 6, 7, 6]);
  });
});
