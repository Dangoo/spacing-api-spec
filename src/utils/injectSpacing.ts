import type { Quadruple } from '../SpaceProps';

function mapKeyToValue<S extends string>(
  key: S | undefined,
  valueMap: Record<S, string>
): string | undefined {
  return key && valueMap.hasOwnProperty(key) ? valueMap[key] : undefined;
}

/**
 * Generate property shorthand or axis related logical properties
 *
 * @param propertyName Name of CSS property
 * @param spacings List of spacing labels
 * @param valueMap Mapping from space keys to CSS values
 */
export function injectSpacing<S extends string>(
  propertyName: 'padding' | 'margin',
  [blockStart, inlineEnd, blockEnd, inlineStart]: Quadruple<S | undefined>,
  valueMap: Record<S, string>
): string {
  const propertyEntries = [
    [`${propertyName}-block-start`, mapKeyToValue(blockStart, valueMap)],
    [`${propertyName}-inline-end`, mapKeyToValue(inlineEnd, valueMap)],
    [`${propertyName}-block-end`, mapKeyToValue(blockEnd, valueMap)],
    [`${propertyName}-inline-start`, mapKeyToValue(inlineStart, valueMap)],
  ];

  const rules = propertyEntries
    .filter(([, value]) => value)
    .map((entry) => `${entry.join(': ')};`);

  if (rules.length === 4) {
    return `${propertyName}: ${propertyEntries
      .map(([, value]) => value)
      .join(' ')};`;
  }

  return rules.join('\n');
}
