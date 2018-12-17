<template>
<div :class="[b()]">
  <slot :row="{}" :index="0"></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Localeable from '@/mixins/Localeable'
import { TableColumnFixed, TableColumnType, TableColumnSelection, TableColumnFilter, TableColumnOverflow } from './table'
import Groupable from '@/mixins/Groupable'
import Group from '@/mixins/Group'

@Component({
  components: {
  },
  name: 'v-table-column'
  })
export default class VTableColumn extends mixins(Themeable, Bemable, Localeable, Groupable, Group) {
    @Prop(String) columnKey!: string | number

    @Prop(String) prop!: string

    @Prop(String) label!: string

    @Prop(String) fixed!: TableColumnFixed

    @Prop(String) width!: string

    @Prop([String]) minWidth!: string

    @Prop(String) type!: TableColumnType

    @Prop(Array) selections!: TableColumnSelection[]

    @Prop([Boolean]) sortable!: boolean

    @Prop([Boolean]) singleLine!: boolean

    @Prop(Array) filters!: TableColumnFilter[]

    @Prop({type: String, default: 'wrap'}) overflow!: TableColumnOverflow

    @Prop(Boolean) resizable!: boolean

    // overwrite from group
    groupNames: string[] = ['v-table-column']

    // unique identification
    get columnIndex () {
      return this.columnKey || this.prop || this.label || this.type
    }

  // $scopedSlots!: {
  //   default: any
  // }
}
</script>
