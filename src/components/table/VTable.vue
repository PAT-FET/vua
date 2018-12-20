<template>
<div :class="[b(), sizeCls, borderedCls]" v-loading="loading">
  <div :class="[e('header')]">

  </div>
  <div :class="[e('body')]" :style="[heightStyle]">
    <table :class="[e('table')]">
      <colgroup ref="colgroup">
        <col v-bind="props" v-for="(props, i) in colsProps" :key="i"/>
      </colgroup>
      <tbody>
        <template v-for="(row, i) in renderedData">
        <tr :key="i" :class="[selectedRowCls(row)]">
          <template v-for="(column, j) in renderedColumns">
          <td :key="column.columnIndex"
           v-bind="span({row, column, rowIndex: i, columnIndex: j})"
           v-if="hasSpan({row, column, rowIndex: i, columnIndex: j})"
           :class="[fixedColumnCls(column)]">
            <v-table-cell v-bind="cellProps(row, column, i)" v-on="cellEvents"></v-table-cell>
          </td>
          </template>
        </tr>
        <v-table-expand-row v-bind="expandRowProps(row, i)" :key="`expand${i}`" v-if="hasExpandRow"></v-table-expand-row>
        </template>
      </tbody>
      <thead>
         <tr v-for="(row, i) in renderedHeaderColumns" :key="i">
            <template  v-for="col in row">
            <th :key="col.column.columnIndex"
                :class="[fixedColumnCls(col.column)]"
                :style="[resizableHeaderStyle(col.column)]"
                v-bind="span({undefined, column: col.column, rowIndex: -1, columnIndex: -1, headerColumn: col})"
                v-if="hasSpan({undefined, column: col.column, rowIndex: -1, columnIndex: -1, headerColumn: col})">
                <v-table-header-cell v-bind="headerCellProps(col)" v-on="headerCellEvents"></v-table-header-cell>
            </th>
            </template>
         </tr>
      </thead>
    </table>
    <div :class="[e('placeholder')]" v-show="!total">{{t('noData')}}</div>
  </div>
  <div :class="[e('footer')]" v-if="pageable" v-show="total > 0">
    <v-pagination v-bind="actualPaginationOption" v-if="pageable" :total="total" :current-page.sync="actualCurrentPage" :page-size.sync="actualPageSize"></v-pagination>
  </div>
  <!-- slot -->
  <div hidden>
    <slot></slot>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Localeable from '@/mixins/Localeable'
import DataIterable from '@/mixins/data-iterable'
import Group from '@/mixins/Group'
import { VTableColumn } from './index'
import VTableCell from './widget/VTableCell.vue'
import VTableHeaderCell from './widget/VTableHeaderCell.vue'
import VTableExpandRow from './widget/VTableExpandRow.vue'
import { TableSize, TableHeaderColumn, TableColumnSelectionCb, TableSpanFn, TableCellCbParam } from '@/components/table/table'
import { VPagination } from '../pagination'
import { Loading } from '@/directives'
import { ReactiveSet } from '@/utils/collection'

@Component({
  components: {
  VTableCell,
  VTableHeaderCell,
  VTableExpandRow,
  VPagination
  },
  directives: {
  Loading
  },
  name: 'v-table'
  })
export default class VTable extends mixins(Themeable, Bemable, Localeable, Group, DataIterable) {
  @Prop({type: String, default: 'lg'}) size!: TableSize

  @Prop(Boolean) bordered!: boolean

  @Prop(String) height!: string

  @Prop(String) maxHeight!: string

  @Prop() paginationOption!: any

  @Prop(Boolean) loading!: boolean

  @Prop([Function]) spanFn!: TableSpanFn

  // overwrite
  groupNames: string[] = ['v-table-column']

  defaultPaginationOption = {
    showTotal: true,
    showSizeChanger: true
  }

  expandRowSet: ReactiveSet<any> = new ReactiveSet()

  cellEvents = {
    select: this.onCellSelect,
    'expand-row': this.onExpandRow
  }

  headerCellEvents = {
    'select-all': this.selectAll,
    select: this.onSelectionSelect,
    sort: this.onSort,
    filter: this.setFilterValues
  }

  get columns (): VTableColumn[] {
    return this.groupItems as VTableColumn[]
  }

  get renderedColumns (): VTableColumn [] {
    let ret: VTableColumn [] = []
    traverse(this.columns)
    return ret
    function traverse (columns: VTableColumn[]) {
      if (!Array.isArray(columns) || columns.length < 1) return
      columns.forEach(col => {
        if (col.groupItems.length > 0) {
          traverse(col.groupItems as VTableColumn[])
        } else {
          ret.push(col)
        }
      })
    }
  }

  get renderedHeaderColumns (): TableHeaderColumn[][] {
    let headerColumns: TableHeaderColumn[] = []
    let ret: TableHeaderColumn[][] = []
    let maxLevel = 0
    traverse(this.columns)
    headerColumns.forEach(headerColumn => {
      let level = headerColumn.column.groupNestedLevel - 1
      if (headerColumn.column.groupItems.length < 1) {
        headerColumn.row = maxLevel + 1 - level
      }
      (ret[level] || (ret[level] = [])).push(headerColumn)
    })
    return ret
    function traverse (columns: VTableColumn[]): number {
      let colCount = 0
      if (!Array.isArray(columns) || columns.length < 1) return colCount
      columns.forEach(column => {
        if (column.groupNestedLevel - 1 > maxLevel) maxLevel = column.groupNestedLevel - 1
        if (column.groupItems.length < 1) {
          headerColumns.push({
            column,
            row: 1,
            col: 1
          })
          colCount++
        } else {
          let headerColumn = {
            column,
            row: 1,
            col: 1
          }
          headerColumns.push(headerColumn)
          let currColCount = traverse(column.groupItems as VTableColumn[])
          colCount += currColCount
          headerColumn.col = currColCount
        }
      })
      return colCount
    }
  }

  get colsProps (): any[] {
    return this.renderedColumns.map(v => {
      return {
        width: v.resizable ? undefined : v.width,
        minWidth: v.minWidth // no use
      }
    })
  }

  get actualPaginationOption () {
    return this.paginationOption || this.defaultPaginationOption
  }

  get hasExpandRow (): boolean {
    return !!this.expandColumn
  }

  get expandColumn (): VTableColumn {
    return this.renderedColumns.find(v => v.type === 'expand') as VTableColumn
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get borderedCls () {
    return this.bordered ? this.m(`bordered`) : ''
  }

  get heightStyle () {
    return {
      height: this.height,
      maxHeight: this.maxHeight
    }
  }

  cellProps (row: any, column: VTableColumn, index: number): any {
    let rowNum = (this.actualCurrentPage - 1) * this.actualPageSize + index + 1
    let expand = this.hasExpandRow ? this.isRowExpand(row) : false
    return {
      row: row,
      rowNum,
      column: column,
      selected: column.type === 'selection' ? this.hasSelection(row) : false,
      expand
    }
  }

  headerCellProps (headerColumn: TableHeaderColumn): any {
    let column = headerColumn.column
    let hasSelected = column.type === 'selection' ? this.hasSelected : false
    let allSelected = column.type === 'selection' ? this.allSelected : false
    let filterValues = (column.filters && column.filters.length > 0) ? this.getFilterValues(column.prop) : []
    return {
      headerColumn,
      allSelected,
      hasSelected,
      size: this.size,
      sorter: this.actualSorter,
      filterValues
    }
  }

  expandRowProps (row: any, index: number): any {
    if (!this.hasExpandRow) return {} // for preformance
    let rowNum = (this.actualCurrentPage - 1) * this.actualPageSize + index + 1
    return {
      expand: this.isRowExpand(row),
      row: row,
      rowNum,
      column: this.expandColumn,
      colCount: this.renderedColumns.length
    }
  }

  isRowExpand (row: any): boolean {
    return this.expandRowSet.has(this.resolveRowKey(row))
  }

  normalSpan (span: number) {
    return span > 1 ? span : undefined
  }

  span ({ row, column, columnIndex, rowIndex, headerColumn }: TableCellCbParam) {
    if (!this.spanFn) {
      if (rowIndex === -1) {
        return {
          rowspan: this.normalSpan(headerColumn.row),
          colspan: this.normalSpan(headerColumn.col)
        }
      }
      return undefined
    }
    let rowspan = 1
    let colspan = 1
    let ret = this.spanFn({ row, column, columnIndex, rowIndex })
    if (!ret) {
      if (rowIndex === -1) {
        return {
          rowspan: this.normalSpan(headerColumn.row),
          colspan: this.normalSpan(headerColumn.col)
        }
      }
      return undefined
    }
    return ret
  }

  hasSpan (param: TableCellCbParam): boolean {
    let ret = this.span(param) as any
    return !ret || (ret.rowspan !== 0 && ret.colspan !== 0)
  }

  fixedColumnCls (column: VTableColumn) {
    return column.fixed ? `fixed-${column.fixed}` : ''
  }

  selectedRowCls (row: any) {
    return this.hasSelection(row) ? 'selected' : ''
  }

  resizableHeaderStyle (column: VTableColumn) {
    if (!column.resizable) return {}
    return {
      resize: 'horizontal',
      overflow: 'hidden',
      width: column.width || column.minWidth
    }
  }

  onCellSelect (row: any, selected: boolean) {
    this.selectRow(row, selected)
  }

  onSelectionSelect (fn: TableColumnSelectionCb) {
    fn({
      currentData: this.renderedData,
      allData: this.actualData,
      selectionKeySet: this.selectionKeySet
    })
  }

  onExpandRow (row: any, expand?: boolean) {
    let key = this.resolveRowKey(row)
    if (expand === undefined) {
      let has = this.isRowExpand(row)
      if (has) this.expandRowSet.delete(key)
      else this.expandRowSet.add(key)
    } else {
      if (expand) this.expandRowSet.add(key)
      else this.expandRowSet.delete(key)
    }
  }

  $refs!: {

  }
}
</script>

<style src="./style/v-table.scss" lang="scss"></style>
