import type { Quadruple, ShorthandList } from '../SpaceProps';
import { expandSizes } from './expandSizes';

/**
 * Merges two given shorthand lists
 *
 * @template S
 * @param {S[]} shorthand List of up to four sizes defined using CSS shorthand pattern
 * @param {S[]} overrides List of up to four override sizes defined using CSS shorthand pattern
 * @returns {S[]}
 */
export function mergeSizes<S>(
  shorthand: [] | ShorthandList<S>,
  overrides: [] | ShorthandList<S>
): Quadruple<S | undefined> {
  const expandedShorthand = expandSizes(shorthand);
  const [
    blockStart = expandedShorthand[0],
    inlineEnd = expandedShorthand[1],
    blockEnd = expandedShorthand[2],
    inlineStart = expandedShorthand[3],
  ] = expandSizes(overrides);

  return [blockStart, inlineEnd, blockEnd, inlineStart];
}
