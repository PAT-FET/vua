import { ReactiveSet } from '@/utils/collection'
import { VTableColumn } from '.'
import { TableColumnSelection } from './table.d'

export type TableColumnFixed = 'left' | 'right'

export type TableColumnType = 'selection' | 'expand' | 'index'

export interface TableColumnSelectionCbParam {
    readonly currentData: any[]
    readonly allData: any[]
    readonly selectionKeySet: ReactiveSet<any>
}

export interface TableColumnSelectionCb {
    (param: TableColumnSelectionCbParam): void
}

export interface TableColumnSelection {
    key: string,
    label: string,
    onSelect: TableColumnSelectionCb
}

export interface TableColumnFilter {
    text?: string
    value: any
}

export type TableSize = 'lg' | 'md' | 'sm'

export interface TableHeaderColumn {
    column: VTableColumn
    // level: number
    row: number
    col: number
}

export type TableColumnOverflow = 'ellipsis' | 'nowrap' | 'wrap'

export interface TableCellCbParam {
    row: any
    rowIndex: number
    column: VTableColumn
    columnIndex: number
    [key: string]: any
}

export interface TableSpanFn {
    (param: TableCellCbParam): { rowspan: number, colspan: number } | undefined
}
