type Spacing<S> = S | 'auto';

export type Tuple<T> = [T, T];
export type Triple<T> = [T, T, T];
export type Quadrupel<T> = [T, T, T, T];

export interface OuterSpaceProps<S> {
    outerSpace?: [Spacing<S>] | Tuple<Spacing<S>> | Triple<Spacing<S>> | Quadrupel<Spacing<S>>;
    outerSpaceBlockStart?: Spacing<S>;
    outerSpaceBlockEnd?: Spacing<S>;
    outerSpaceInlineStart?: Spacing<S>;
    outerSpaceInlineEnd?: Spacing<S>;
}

export interface InnerSpaceProps<S> {
    innerSpace?: [Spacing<S>] | Tuple<Spacing<S>> | Triple<Spacing<S>> | Quadrupel<Spacing<S>>;
    innerSpaceBlockStart?: Spacing<S>;
    innerSpaceBlockEnd?: Spacing<S>;
    innerSpaceInlineStart?: Spacing<S>;
    innerSpaceInlineEnd?: Spacing<S>;
}
