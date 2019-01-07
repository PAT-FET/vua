import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export interface GridProps {
    column: number
    gutter: number
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
}

@Component
export default class Gridable extends Vue {
    @Prop() grid!: GridProps

    get rowProps () {
      if (!this.grid) return {}
      return {
        gutter: this.grid.gutter
      }
    }

    get colProps () {
      if (!this.grid) return {}
      return {
        span: span(this.grid.column),
        xs: span(this.grid.xs),
        sm: span(this.grid.sm),
        md: span(this.grid.md),
        lg: span(this.grid.lg),
        xl: span(this.grid.xl)
      }
      function span (col: number | undefined) {
        if (!col) return undefined
        return Math.floor(24 / col)
      }
    }
}
