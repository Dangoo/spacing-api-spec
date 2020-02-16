import { Tuple, Triple, Quadrupel } from '../SpaceProps';
import { expandSizes } from './expandSizes';

/**
 * Merges two given shorthand lists
 * 
 * @template S
 * @param {S[]} shorthand List of up to four sizes defined using CSS shorthand pattern
 * @param {[S, S, S, S]} overrides List of up to four override sizes defined using CSS shorthand pattern
 * @returns {S[]}
 */
export function mergeSizes<S>(
  shorthand: [] | [S] | Tuple<S> | Triple<S> | Quadrupel<S>,
  overrides: [] | [S] | Tuple<S> | Triple<S> | Quadrupel<S>
): Quadrupel<S | undefined> {
  const expandedShorthand = expandSizes(shorthand);
  const [
    blockStart = expandedShorthand[0],
    inlineEnd = expandedShorthand[1],
    blockEnd = expandedShorthand[2],
    inlineStart = expandedShorthand[3]
  ] = expandSizes(overrides);

  return [blockStart, inlineEnd, blockEnd, inlineStart];
}
