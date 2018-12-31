import { greyGradation, buildinColor, generateColorGradation } from './color'

const themeLight = {
  '--heading-color': 'rgba(0, 0, 0, .85)',
  '--text-color': 'rgba(0, 0, 0, .65)',
  '--text-color-active': 'var(--primary-base)', // text active
  '--text-color-secondary': 'rgba(0, 0, 0, .45)',
  '--disabled-color': 'rgba(0, 0, 0, .25)',
  '--bg-color': greyGradation['lighten-5'],
  '--bg-color-1': greyGradation['lighten-4'], // selected item, header
  '--bg-color-2': greyGradation['lighten-3'], // grey disabled
  '--bg-color-active': 'var(--primary-lighten-5)', // bg active
  '--border-color-base': greyGradation['lighten-1'],
  '--border-color-split': greyGradation['lighten-2']
}

const themeDark = {
  '--heading-color': 'rgba(255, 255, 255, 1)',
  '--text-color': 'rgba(255, 255, 255, .85)',
  '--text-color-active': 'var(--primary-lighten-4)', // text active
  '--text-color-secondary': 'rgba(255, 255, 255, .65)',
  '--disabled-color': 'rgba(255, 255, 255, .35)',
  '--bg-color': '#303030',
  '--bg-color-1': '#3d3d3d', // selected item, header
  '--bg-color-2': '#4a4a4a', // grey disabled
  '--bg-color-active': 'var(--primary-darken-4)', // bg active
  '--border-color-base': '#636363',
  '--border-color-split': '#575757'
}

const defaultColor = {
  primary: buildinColor.blue,
  secondary: buildinColor.grey,
  success: buildinColor.green,
  info: buildinColor.cyan,
  warning: buildinColor.gold,
  error: buildinColor.red
}

export function getThemeLight () {
  return Object.assign({}, themeLight)
}

export function getThemeDark () {
  return Object.assign({}, themeDark)
}

export function getDefaultColor () {
  return Object.assign({}, defaultColor)
}

export function setCssColor (name: string, color: string, $el: HTMLElement) {
  let colorGradation = generateColorGradation(color)
  if (!colorGradation) return
  Object.entries(colorGradation).forEach(([key, value]) => {
    $el.style.setProperty(`--${name}-${key}`, value)
  })
}
