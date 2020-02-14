import { Tuple, Triple, Quadrupel } from "../SpaceProps";
/**
 * @template S
 * @param {S[]} shorthand List of up to four sizes defined clockwise starting with top
 * @param {S} [blockStart] Size for upper side
 * @param {S} [inlineEnd] Size for right side
 * @param {S} [blockEnd] Size for lower side
 * @param {S} [inlineStart] Size for left side
 * @returns {S[]}
 */
export function mergeSizes<S>(
    shorthand: [] | [S] | Tuple<S> | Triple<S> | Quadrupel<S> = [],
    blockStart?: S,
    inlineEnd?: S,
    blockEnd?: S,
    inlineStart?: S
): Quadrupel<S | undefined> {
  return [
    blockStart || shorthand[0],
    inlineEnd || shorthand[1],
    blockEnd || shorthand[2],
    inlineStart || shorthand[3],
  ];
}