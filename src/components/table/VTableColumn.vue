<template>
<div :class="[b()]">
  <slot :row="{}" :index="0"></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Localeable, Groupable, Group } from '../../mixins'
import { TableColumnFixed, TableColumnType, TableColumnSelection, TableColumnFilter, TableColumnOverflow } from './type'

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

    @Prop(Array) filters!: TableColumnFilter[]

    @Prop({type: String, default: 'wrap'}) overflow!: TableColumnOverflow

    @Prop(Boolean) resizable!: boolean

    @Prop({type: Number, default: 0}) order!: number

    @Prop(String) title!: string

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
