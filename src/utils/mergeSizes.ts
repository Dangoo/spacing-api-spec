import { Tuple, Triple, Quadrupel } from "../SpaceProps";
import { expand } from "./expand";

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
  const expanded = expand(shorthand);

  return [
    blockStart || expanded[0],
    inlineEnd || expanded[1],
    blockEnd || expanded[2],
    inlineStart || expanded[3],
  ];
}