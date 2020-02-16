import { Quadrupel } from '../SpaceProps';

/**
 * @template S
 * @param {S[]} source
 * @returns {([] | Quadrupel<S>)}
 */
export function expandSizes<S>(source: S[]): [] | Quadrupel<S> {
  switch (source.length) {
    case 0:
      return [];
    case 1: // [a]          => [a, a, a, a]
      return [source[0], source[0], source[0], source[0]];
    case 2: // [a, b]       => [a, b, a, b]
      return [source[0], source[1], source[0], source[1]];
    case 3: // [a, b, c]    => [a, b, c, b]
      return [source[0], source[1], source[2], source[1]];
    case 4: // [a, b, c, d] => [a, b, c, d]
    default:
      return [source[0], source[1], source[2], source[3]];
  }
}
