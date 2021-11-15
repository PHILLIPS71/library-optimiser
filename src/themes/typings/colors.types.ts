export type Shade = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
export type Status = 'success' | 'info' | 'warning' | 'danger'

type Shades = {
  [K in Shade as K]: string
}

type StatusColors = {
  [K in Status as K]: string
}

type ShadeColors = {
  grays: Shades
}

type BaseColors = {
  primary: string
  secondary: string
  accent: string

  white: string
  black: string
  background: string

  blue: string
}

export type Breakpoints = {
  sm: string
  md: string
  lg: string
  xl: string
}

export type Colors = BaseColors & ShadeColors & StatusColors
