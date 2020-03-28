export type Tuple<S> = [S, S];
export type Triple<S> = [S, S, S];
export type Quadruple<S> = [S, S, S, S];
export type ShorthandList<S> =
  | [S]
  | Tuple<S>
  | Triple<S>
  | Quadruple<S>;

export interface OuterSpaceProps<S> {
  outerSpace?: ShorthandList<S>;
  outerSpaceBlockStart?: S;
  outerSpaceBlockEnd?: S;
  outerSpaceInlineStart?: S;
  outerSpaceInlineEnd?: S;
}

export interface InnerSpaceProps<S> {
  innerSpace?: ShorthandList<S>;
  innerSpaceBlockStart?: S;
  innerSpaceBlockEnd?: S;
  innerSpaceInlineStart?: S;
  innerSpaceInlineEnd?: S;
}
