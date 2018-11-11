/**
 * copy from Vuetify, please note detail later.
 */

import Vue from 'vue'
import { VuaBreakpoint, VuaBreakpointType } from '@/vua'
import { debounce } from '../utils/perf'
import Component from 'vue-class-component'

// Please keep consistent with Css Breakpoint
const BP = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280 - 16,
  xl: 1920 - 16
}

@Component
export default class Breakpoint extends Vue {
    clientHeight: number = getClientHeight()
    clientWidth: number = getClientWidth()

    onResizeDelay = debounce(this.onResize, 200, this)

    get breakpoint (): VuaBreakpoint {
      const xs = this.clientWidth < BP.sm
      const sm = this.clientWidth < BP.md && !xs
      const md = this.clientWidth < BP.lg && !(sm || xs)
      const lg = this.clientWidth < BP.xl && !(md || sm || xs)
      const xl = this.clientWidth >= BP.xl

      const xsOnly = xs
      const smOnly = sm
      const smAndDown = (xs || sm) && !(md || lg || xl)
      const smAndUp = !xs && (sm || md || lg || xl)
      const mdOnly = md
      const mdAndDown = (xs || sm || md) && !(lg || xl)
      const mdAndUp = !(xs || sm) && (md || lg || xl)
      const lgOnly = lg
      const lgAndDown = (xs || sm || md || lg) && !xl
      const lgAndUp = !(xs || sm || md) && (lg || xl)
      const xlOnly = xl

      let name
      switch (true) {
        case (xs):
          name = 'xs'
          break
        case (sm):
          name = 'sm'
          break
        case (md):
          name = 'md'
          break
        case (lg):
          name = 'lg'
          break
        default:
          name = 'xl'
          break
      }

      return {
        // Definite breakpoint.
        xs,
        sm,
        md,
        lg,
        xl,

        // Useful e.g. to construct CSS class names dynamically.
        name,

        // Breakpoint ranges.
        xsOnly,
        smOnly,
        smAndDown,
        smAndUp,
        mdOnly,
        mdAndDown,
        mdAndUp,
        lgOnly,
        lgAndDown,
        lgAndUp,
        xlOnly,

        // For custom breakpoint logic.
        width: this.clientWidth,
        height: this.clientHeight
      }
    }

    created () {
      if (typeof window === 'undefined') return
      window.addEventListener('resize', this.onResizeDelay, { passive: true })
    }

    beforeDestroy () {
      if (typeof window === 'undefined') return
      window.removeEventListener('resize', this.onResizeDelay)
    }

    onResize (): void {
      this.setDimensions()
    }
    setDimensions (): void {
      this.clientHeight = getClientHeight()
      this.clientWidth = getClientWidth()
    }
}

function getClientWidth () {
  if (typeof document === 'undefined') return 0 // SSR
  return Math.max(
        document.documentElement!.clientWidth,
        window.innerWidth || 0
  )
}

function getClientHeight () {
  if (typeof document === 'undefined') return 0 // SSR
  return Math.max(
        document.documentElement!.clientHeight,
        window.innerHeight || 0
  )
}
