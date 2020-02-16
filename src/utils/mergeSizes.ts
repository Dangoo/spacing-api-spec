import { Tuple, Triple, Quadrupel } from '../SpaceProps';
import { expandSizes } from './expandSizes';

/**
 * @template S
 * @param {S[]} shorthand List of up to four sizes defined clockwise starting with top
 * @param {[S, S, S, S]} overrides List of four override sizes defined clockwise starting with top
 * @returns {S[]}
 */
export function mergeSizes<S>(
  shorthand: [] | [S] | Tuple<S> | Triple<S> | Quadrupel<S> = [],
  overrides: [] | Quadrupel<S>
): Quadrupel<S | undefined> {
  const expanded = expandSizes(shorthand);
  const [
    blockStart = expanded[0],
    inlineEnd = expanded[1],
    blockEnd = expanded[2],
    inlineStart = expanded[3]
  ] = overrides;

  return [blockStart, inlineEnd, blockEnd, inlineStart];
}
