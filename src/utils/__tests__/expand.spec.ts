import { expandSizes } from '../expandSizes';

describe('expand', (): void => {
  it('does nothing for empty array', () => {
    const res = expandSizes([]);

    expect(res).toStrictEqual([]);
  });

  it('expands correctly from a single entry', () => {
    const res = expandSizes([0]);

    expect(res).toStrictEqual([0, 0, 0, 0]);
  });

  it('expands correctly from two entries', () => {
    const res = expandSizes([0, 1]);

    expect(res).toStrictEqual([0, 1, 0, 1]);
  });

  it('expands correctly from three entries', () => {
    const res = expandSizes([0, 1, 2]);

    expect(res).toStrictEqual([0, 1, 2, 1]);
  });

  it('returns a clone of source from 4 entries', () => {
    const source = [0, 1, 2, 3];
    const res = expandSizes(source);

    expect(res).not.toBe(source);
    expect(res).toStrictEqual([0, 1, 2, 3]);
  });
});
