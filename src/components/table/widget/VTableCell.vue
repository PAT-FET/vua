<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Localeable from '@/mixins/Localeable'
import { TableColumnType } from '@/components/table/table'
import { VTableColumn } from '../../..'
import { VNode, CreateElement } from 'vue'
import { VCheckbox } from '../../checkbox'

@Component({
  components: {
  VCheckbox
  },
  name: 'v-table-cell'
  })
export default class VTableCell extends mixins(Themeable, Bemable, Localeable) {
  @Prop() row!: any

  @Prop() column!: VTableColumn

  @Prop() rowNum!: number

  @Prop(Boolean) selected!: boolean

  @Prop(Boolean) expand!: boolean

  @Emit() select (row: any, selected: boolean) {}

  @Emit() expandRow (row: any, expand?: boolean) {}

  render (h: CreateElement): VNode {
    let type = this.column.type
    if (!type) {
      return this.renderNormalCell(h)
    } else if (type === 'index') {
      return this.renderIndexCell(h)
    } else if (type === 'selection') {
      return this.renderSelectionCell(h)
    } else if (type === 'expand') {
      return this.renderExpandCell(h)
    }
    return h('div', '-')
  }

  renderSelectionCell (h: CreateElement): VNode {
    return h('v-checkbox', {
      props: {
        value: this.selected
      },
      on: {
        input: (val: boolean) => this.select(this.row, val)
      }
    })
  }

  renderExpandCell (h: CreateElement): VNode {
    return h('span', {
      'class': [this.e('expand-row-icon'), this.expandCls],
      on: {
        click: this.onExpandRow
      }
    })
  }

  renderNormalCell (h: CreateElement): VNode {
    let content = null
    let data = { class: [this.e('content')] }
    if (this.column.$scopedSlots.default) {
      content = h('div', data, [
        this.column.$scopedSlots.default({
          row: this.row,
          rowNum: this.rowNum
        })
      ])
    } else {
      content = h('div', data, this.row[this.column.prop] || '')
    }
    return h('div', { class: [this.b(), this.overflowEllipsisCls] }, [content])
  }

  renderIndexCell (h: CreateElement): VNode {
    return h('div', this.rowNum + '')
  }

  get overflowEllipsisCls () {
    let overflow = this.column.overflow
    return overflow ? this.m(`overflow-${overflow}`) : ''
  }

  get expandCls () {
    return this.expand ? 'expand' : ''
  }

  onExpandRow () {
    this.expandRow(this.row)
  }
}
</script>

<style src="../style/v-table-cell.scss" lang="scss"></style>
