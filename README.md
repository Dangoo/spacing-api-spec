# Spacing API Spec

A spec proposal for a common spacing API among components of a design system.

## Table of Contents
1. [Rationale](#rationale)
2. [Spec](#spec)
3. [Examples](#examples)
4. [Note on Adaptive Space Sizes](#note-on-adaptive-space-sizes)

## Rationale
A design system combines several aspects of an user interface and sets the rules
for their usage. This includes e.g. colors, fonts and spaces.
Traditionally in web development with CSS, spaces are mostly applied using the
`padding` (inner spacing) and `margin` (outer spacing) properties. This forms
something like a "low level API" to spacing.
Coming from a more component based approach of composing interfaces, the components
come with a high level API for a variety of purposes, sometimes called "props" or
"attributes".
It is up to the author of the library to choose the level of their exposure. But it seems
reasonable not to expose the whole CSS styling API in order to prevent abuse or
unexpected behavior.
This said you may want to offer some kind of high level API in the shape a of configuration
through props.

## Spec
Similar to the CSS box model this spec provides two kinds of spacings:
"outer spaces" as a way to set the margin around a component and "inner spaces"
for the padding equivalent.
While the former will be discussed in detail, the latter mostly adapts the same
principles and will probably get used less commonly.

### Formal syntax
<dl>
<dt>&lt;spacing&gt;</dt>
<dd>The alias of the spacing as defined by the design system.</dd>
<dt>auto</dt>
<dd>The browser selects a suitable spacing to use. For example, in certain cases this value can be used to center an element.</dd>
</dl>

#### Shorthand Notation
As known from `margin` and `padding` CSS properties, this spec offers a shorthand notation: `outerSpace`.
```
[ <spacing> | auto ]{1,4}
```

| Variant | Description |
|--|--|
|`[all]`| Apply to all four sides |
|`[block, inline]`| vertical \| horizontal |
|`[block-start, inline, block-end]`| top \| horizontal \| bottom |
|`[block-start, inline-end, block-end, inline-start]`| top \| right \| bottom \| left |

#### Single direction
Single direction properties are offered as well:
- `outerSpaceBlockStart`
- `outerSpaceBlockEnd`
- `outerSpaceInlineStart`
- `outerSpaceInlineEnd`

```
<spacing> | auto
```


ℹ For more details on logical properties see [this article on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).


## Examples
These examples show a potential implementation using CSS Custom Properties and a mapping
to [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding#Margin_examples) for ReactJS components
### Same value on all four sides
```typescript
import { MyComponent, Spaces } from '@scope/design-system';

<MyComponent outerSpace={[Spaces.M]}>

/** Resulting styles
 * margin: var(--space--m);
*/
```

### Same value for inline axis, distinct values for `block-start` & `block-end`
```typescript
import { MyComponent, Spaces } from '@scope/design-system';

<MyComponent outerSpace={[Spaces.M, Spaces.S, Spaces.XL]}>

/** Resulting styles
 * margin: var(--space--m) var(--space-s) var(--space--xl);
 * 
 * @supports(margin-block-end: 0) {
 *     margin-block-start: var(--space--m);
 *     margin-block-end: var(--space--xl);
 *     margin-inline-start: var(--space--s);
 *     margin-inline-end: var(--space--s);
 * }
*/
```

### Dedicated value for `block-end`
```typescript
import { MyComponent, Spaces } from '@scope/design-system';

<MyComponent outerSpaceBlockEnd={Spaces.XL}>

/** Resulting styles
 * margin-bottom: var(--space--xl);
 * 
 * @supports(margin-block-end: 0) {
 *     margin-block-end: var(--space--xl);
 * }
*/
```

## Note on Adaptive Space Sizes
Some design systems use adaptive values corresponding to the current media
(aka media queries).
By using CSS Custom Properties, this can be archived fairly simple:
```css
:root {
    --space--s: 4px;
    --space--m: 8px;
    --space--xl: 16px;

    @media (min-width: 640px;) {
        --space--s: 6px;
        --space--m: 12px;
        --space--xl: 24px;
    }
}
```

At the same time you might not want all the spaces to adapt, so an extension to the
above spec could be to introduce distinct fixed and adaptive properties:

```typescript
import { MyComponent, Spaces } from '@scope/design-system';

<MyComponent
    outerSpaceBlockStartFixed={Spaces.M}
    outerSpaceBlockEnd={Spaces.XL}
/>

/** Resulting styles
 * margin-top: 8px;
 * margin-bottom: var(--space--xl);
 * 
 * @supports(margin-block-end: 0) {
 *     margin-block-start: 8px;
 *     margin-block-end: var(--space--xl);
 * }
*/
```