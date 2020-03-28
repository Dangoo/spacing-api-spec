import { injectSpacing } from '../injectSpacing';

const valueMap = {
  m: '12px',
};

describe('injectSpacing', () => {
  it('should return an empty string for set of undefiend entries', () => {
    const result = injectSpacing(
      'margin',
      [undefined, undefined, undefined, undefined],
      valueMap
    );

    expect(result).toBe('');
  });

  it('should return a shorthand for set of four entries', () => {
    const result = injectSpacing('margin', ['m', 'm', 'm', 'm'], valueMap);

    expect(result).toBe(`margin: 12px 12px 12px 12px;`);
  });

  it('should return separate rules when at least one undefined entry', () => {
    const result = injectSpacing(
      'margin',
      ['m', 'm', undefined, 'm'],
      valueMap
    );

    expect(result).toBe(
      [
        `margin-block-start: 12px;`,
        `margin-inline-end: 12px;`,
        `margin-inline-start: 12px;`,
      ].join('\n')
    );
  });
});
