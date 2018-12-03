import Vue from 'vue'
import Component from 'vue-class-component'
import { colorPalette, buildinColor, greyGradation } from '@/utils/color';
/**
 * 1. theme color: primary  primary-lighten-1
 * 2. buildin color: pink pink-lighten-1
 * 3. any color: #89ff13 #89ff13-ligthen-1
 */

const gradationMap: Record<string, number> = {
    'lighten-5': 1,
    'lighten-4': 2,
    'lighten-3': 3,
    'lighten-2': 4,
    'lighten-1': 5,
    'darken-1': 7,
    'darken-2': 8,
    'darken-3': 9,
    'darken-4': 10
}
@Component
export default class Colorable extends Vue {
  parseColor (color: string): string {
    if (!color) return ''
    let [prefix, suffix] = sepColor()
    if (prefix.startsWith('#')) {
      return parse(prefix, suffix)
    }
    if (prefix === 'grey') {
      return suffix ? (greyGradation as any)[prefix] : greyGradation['base']
    } 
    let bc = (buildinColor as any)[prefix] || ''
    if (bc) {
      return parse(bc, suffix)
    }
    let theme = (this.$vua.theme as any)[prefix]
    if (theme) {
      if (theme.startsWith('#')) {
        return parse(theme, suffix)
      }
      if (theme === 'grey') {
        return suffix ? (greyGradation as any)[theme] : greyGradation['base']
      }
      let bc = (buildinColor as any)[theme] || ''
      if (bc) {
        return parse(bc, suffix)
      }
    }
    return ''

    function sepColor (): string[] {
      let suffix = ''
      let prefix = color
      let idx = color.indexOf('-')
      if (idx !== -1) {
        prefix = color.substring(0, idx)
        suffix = color.substr(idx + 1)
      }
      return [prefix, suffix]
    }

    function parse (prefix: string, suffix: string) {
      if (suffix) {
        return colorPalette(prefix, gradationMap[suffix])
      }
      return prefix
    }
  }
}
