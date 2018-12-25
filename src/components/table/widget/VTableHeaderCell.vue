<template>
<div :class="[b(), sizeCls]">
  <div v-if="column.type === 'selection'">
   <v-checkbox v-model="selected" :indeterminate="hasSelected && !selected"></v-checkbox>
   <v-dropdown :class="[e('selection-menu')]">
      <span :class="[e('selection-menu-icon')]"><i class="anticon anticon-down"></i></span>
      <v-dropdown-menu slot="dropdown">
        <v-dropdown-item v-for="sel in column.selections" :key="sel.key"
        @click.native="select(sel.onSelect)">{{sel.label}}</v-dropdown-item>
    </v-dropdown-menu>
   </v-dropdown>
  </div>
  <div :class="[e('content'), hasAppendCls]" v-else>
    <span v-if="!sortable">{{column.label}}</span>
    <div :class="[e('sorter')]" v-if="sortable" @click="onSort()">
      <div :class="[e('sorter-text')]">{{column.label}}</div>
      <div :class="[e('sorter-icon'), sortedCls]">
        <span @click.stop="onSort('asc')"><i class="anticon anticon-caret-up"></i></span>
        <span @click.stop="onSort('desc')"><i class="anticon anticon-caret-down"></i></span>
      </div>
    </div>
    <div :class="[e('filter')]" v-if="filterable">
      <v-dropdown placement="bottom-end" trigger="click" @close="onFilterClose" @open="onFilterOpen">
          <span :class="[e('filter-icon'), hasFilterCls]"><i class="anticon anticon-filter"></i></span>
          <v-dropdown-menu slot="dropdown">
              <v-dropdown-item v-for="filter in column.filters" :key="filter.value">
                <div @click.stop="()=>{}">
                    <v-checkbox v-model="localFilterValues" :label="filter.value">{{filter.text}}</v-checkbox>
                </div>
              </v-dropdown-item>
              <v-dropdown-item divider></v-dropdown-item>
              <v-dropdown-item>
                <a class="mr-3" @click="onFilter">确定</a>
                <a @click="onResetFilter">重置</a>
              </v-dropdown-item>
          </v-dropdown-menu>
      </v-dropdown>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Localeable from '@/mixins/Localeable'
import { TableHeaderColumn, TableColumnSelectionCb } from '@/components/table/table'
import { VCheckbox } from '../../checkbox'
import { VDropdown, VDropdownMenu, VDropdownItem } from '../../dropdown'
import { ReactiveSet } from '@/utils/collection'
import { TabsSize } from '@/components/tabs/tabs'
import { DataSorter } from '@/mixins/data-iterable/type'

@Component({
  components: {
  VCheckbox,
  VDropdown,
  VDropdownMenu,
  VDropdownItem
  },
  name: 'v-table-header-cell'
  })
export default class VTableHeaderCell extends mixins(Themeable, Bemable, Localeable) {
  @Prop() headerColumn!: TableHeaderColumn

  @Prop(Boolean) allSelected!: boolean

  @Prop(Boolean) hasSelected!: boolean

  @Prop(String) size!: TabsSize

  @Prop() sorter!: DataSorter

  @Prop(Array) filterValues!: any[]

  @Emit() selectAll (selected: boolean) {}

  @Emit() select (cb: TableColumnSelectionCb) {}

  @Emit() sort (prop: string, order?: 'asc' | 'desc') {}

  @Emit() filter (prop: string, values: any[]) {}

  localFilterValues: any[] = []

  get column () {
    return this.headerColumn && this.headerColumn.column
  }

  get selected () {
    return this.allSelected
  }

  set selected (selected: boolean) {
    this.selectAll(selected)
  }

  get sortable () {
    return !!this.column.sortable
  }

  get filterable () {
    return this.column.filters && this.column.filters.length > 0
  }

  get hasAppend () {
    return this.sortable || this.filterable
  }

  get hasAppendCls () {
    return this.hasAppend ? 'has-append' : ''
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get sortedCls () {
    if (!this.sorter || this.sorter.prop !== this.column.prop || !this.sorter.order) return ''
    return `is-sorted-${this.sorter.order}`
  }

  get hasFilterCls () {
    return (this.filterValues && this.filterValues.length > 0) ? 'has-filter' : ''
  }

  onSort (order?: 'desc' | 'asc') {
    let prop = this.column.prop
    if (order) {
      this.sort(prop, order)
    } else {
      if (!this.sorter || this.sorter.prop !== prop) {
        this.sort(prop, 'asc')
      } else {
        this.sorter.order === 'asc' ? this.sort(prop, 'desc') : this.sort(prop)
      }
    }
  }

  onFilterClose () {
    this.localFilterValues = []
  }

  onFilterOpen () {
    this.localFilterValues = this.filterValues || []
  }

  onFilter () {
    this.filter(this.column.prop, this.localFilterValues)
  }

  onResetFilter () {
    this.filter(this.column.prop, [])
  }
}
</script>

<style src="../style/v-table-header-cell.scss" lang="scss"></style>
