import 'styled-components'
import type { Colors } from '@/themes/typings/colors.types'
import type { Typeface, Typography } from '@/themes/typings/typography.types'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    layout: {
      maxWidth: string
    }
    breakpoints: Array<string>
    colors: Colors
    fonts: Typeface
    typography: Typography
  }
}
