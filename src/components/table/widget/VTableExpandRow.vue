<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Localeable from '@/mixins/Localeable'
import { TableColumnType } from '@/components/table/table'
import { VTableColumn } from '../../..'
import { VNode, CreateElement } from 'vue'
import { VExpandTransition } from '../../transitions/index'

@Component({
  components: {
  VExpandTransition
  },
  name: 'v-table-expand-row'
  })
export default class VTableExpandRow extends mixins(Themeable, Bemable, Localeable) {
  @Prop(Boolean) expand!: boolean

  @Prop() column!: VTableColumn

  @Prop() row!: any

  @Prop(Number) colCount!: number

  @Prop(Number) rowNum!: number

  render (h: CreateElement): VNode | null {
    let data = {
      class: [this.b(), this.collapseCls]
    }
    let expandTransitionData = {
      directives: [
        {
          name: 'show',
          value: this.expand,
          expression: 'expand',
          arg: '',
          modifiers: {},
          oldValue: false
        }
      ]
    }
    return h('tr', data, [
      h('td'),
      h('td', { attrs: { colspan: this.colCount - 1 } }, [
        h('v-expand-transition', {}, [
          h('div', expandTransitionData, [
            h('div', { class: [this.e('content')] }, [
              this.column.$scopedSlots.default({
                row: this.row,
                $index: this.rowNum
              })
            ])
          ])
        ])
      ])
    ])
  }

  get collapseCls () {
    return !this.expand ? 'collapse' : ''
  }
}
</script>

<style src="../style/v-table-expand-row.scss" lang="scss"></style>
