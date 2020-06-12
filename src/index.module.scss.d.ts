export interface IStyles {
  'submit__btn': string;
  'edit': string;
}

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
