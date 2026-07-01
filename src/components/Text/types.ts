import type { CSSProperties } from 'vue';

export type Typography =
  | 'inherit'
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  | 'title-6'
  | 'title-7'
  | 'title-8'
  | 'title-9'
  | 'title-10'
  | 'subtitle-1'
  | 'subtitle-2'
  | 'subtitle-3'
  | 'subtitle-4'
  | 'label-1'
  | 'label-2'
  | 'label-3'
  | 'paragraph-1'
  | 'paragraph-2';

export interface TextProps {
  Element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a' | 'button' | 'label';
  typography?: Typography;
  clamp?: 2 | 3 | 4;
  ellipsis?: boolean;
  color?: 'default' | 'inherit' | 'secondary' | 'negative';
  textAlign?: CSSProperties['textAlign'];
}
