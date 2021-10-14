export type FontStyle = 'normal' | 'italic' | 'oblique'

export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 'initial' | 'inherit'

export type Font = {
  fontSize: string
  lineHeight: number | string
}

export type Typeface = {
  primary: string
  secondary: string
  tertiary: string
  text: string
}

export type Typography = {
  font12: Font
  font14: Font
  font16: Font
  font18: Font
  font20: Font
  font24: Font
  font30: Font
  font36: Font
  font42: Font
  font48: Font
  font60: Font
  font72: Font
}
