type Spacing<S> = S | 'auto';

export type Tuple<S> = [S, S];
export type Triple<S> = [S, S, S];
export type Quadrupel<S> = [S, S, S, S];
export type ShorthandList<S> =
  | [S]
  | Tuple<S>
  | Triple<S>
  | Quadrupel<S>;

export interface OuterSpaceProps<S> {
  outerSpace?: ShorthandList<Spacing<S>>;
  outerSpaceBlockStart?: Spacing<S>;
  outerSpaceBlockEnd?: Spacing<S>;
  outerSpaceInlineStart?: Spacing<S>;
  outerSpaceInlineEnd?: Spacing<S>;
}

export interface InnerSpaceProps<S> {
  innerSpace?: ShorthandList<Spacing<S>>;
  innerSpaceBlockStart?: Spacing<S>;
  innerSpaceBlockEnd?: Spacing<S>;
  innerSpaceInlineStart?: Spacing<S>;
  innerSpaceInlineEnd?: Spacing<S>;
}
