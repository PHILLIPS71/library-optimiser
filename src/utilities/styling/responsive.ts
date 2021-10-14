import type { Responsive } from '@/utilities/styling/typings/responsive.types'

export const getMediaQuery = (breakpoint: string): string => `@media screen and (min-width: ${breakpoint})`

export const getMediaQueries = (breakpoints: Array<string>): string[] => Object.values(breakpoints).map(getMediaQuery)

export const getResponsiveValue = <T>(responsive: Responsive<T>, i: number): T => {
  if (!Array.isArray(responsive)) {
    return responsive
  }

  if (typeof responsive[i] === 'undefined') {
    return responsive[responsive.length - 1]
  }

  return responsive[i]
}

export const getResponsiveNumber = <T>(responsive: Responsive<T>, i: number): number => {
  const value = getResponsiveValue(responsive, i)
  return typeof value === 'number' ? value : 0
}
