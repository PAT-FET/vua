import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Emit, Watch } from 'vue-property-decorator'
import { DataPagination, DataSorter, DataFilter, DataRowKeyFunc, DataRemoteChangeParam } from './type.d'
import { ReactiveSet } from '@/utils/collection'

@Component
export default class DataIterable extends Vue {
    @Prop(Array) dataSource!: any[]

    @Prop() pagination!: DataPagination

    @Prop() sorter!: DataSorter

    @Prop(Array) filters!: DataFilter[]

    @Prop([String, Function]) rowKey!: string | DataRowKeyFunc

    @Prop(Boolean) pageable!: boolean

    // no local pagination、filter、sorter
    @Prop (Boolean) remote!: boolean

    localCurrentPage: number = 1

    localPageSize: number = 10

    localSorter: DataSorter| null = null

    localFilters: DataFilter[] = []

    selectionKeySet: ReactiveSet<any> = new ReactiveSet()

    get actualData (): any[] {
      // under remote, won't filter locally
      if (this.remote) return this.dataSource
      let data = (this.dataSource || []).slice(0)
      data = this.doFilter(data)
      return data
    }

    /**
     * data for render, do not use actualdata to render, and this for in case,
     * eg: change sort to current page instead to all
     */
    get renderedData () {
      // under remote won't sort and pagination locally
      if (this.remote) return this.dataSource
      let data = this.doSort(this.actualData.slice(0))
      data = this.doPagination(data)
      return data
    }

    get total (): number {
      return (this.pagination && this.pagination.total) || this.actualData.length
    }

    get actualCurrentPage () {
      return (this.pagination && this.pagination.currentPage) || this.localCurrentPage
    }

    set actualCurrentPage (currentPage: number) {
      this.localCurrentPage = currentPage
      this.currentPageChange(currentPage)
    }

    get actualPageSize () {
      return (this.pagination && this.pagination.pageSize) || this.localPageSize
    }

    set actualPageSize (pageSize: number) {
      this.localPageSize = pageSize
      this.pageSizeChange(pageSize)
    }

    get actualSorter (): DataSorter| null {
      return this.sorter || this.localSorter
    }

    set actualSorter (sorter: DataSorter | null) {
      this.localSorter = sorter
      this.sorterChange(sorter)
    }

    get actualFilters (): DataFilter[] {
      return this.filters || this.localFilters
    }

    set actualFilters (filters: DataFilter[]) {
      this.localFilters = filters
      this.filtersChange(filters)
    }

    @Emit() currentPageChange (currentPage: number) {
      this.remoteChange({
        pagination: {
          currentPage,
          pageSize: this.actualPageSize,
          total: 0 // no use, just eliminate type error
        },
        sorter: this.actualSorter,
        filters: this.actualFilters
      })
    }

    @Emit() pageSizeChange (pageSize: number) {
      this.remoteChange({
        pagination: {
          currentPage: this.actualCurrentPage,
          pageSize,
          total: 0 // no use, just eliminate type error
        },
        sorter: this.actualSorter,
        filters: this.actualFilters
      })
    }

    @Emit() sorterChange (sorter: DataSorter | null) {
      this.remoteChange({
        pagination: {
          currentPage: this.actualCurrentPage,
          pageSize: this.actualPageSize,
          total: 0 // no use, just eliminate type error
        },
        sorter,
        filters: this.actualFilters
      })
    }

    @Emit() filtersChange (filters: DataFilter[]) {
      this.remoteChange({
        pagination: {
          currentPage: this.actualCurrentPage,
          pageSize: this.actualPageSize,
          total: 0 // no use, just eliminate type error
        },
        sorter: this.actualSorter,
        filters
      })
    }

    // whole set of above 4, it's more convenient for remote
    @Emit() remoteChange (param: DataRemoteChangeParam) {}

    @Emit() selectionChange (keys: any[]) {}

    resolveRowKey (row: any): any {
      if (!this.rowKey) return row
      if (typeof this.rowKey === 'string') {
        return row[this.rowKey] || row
      } else {
        return this.rowKey(row) || row
      }
    }

    doFilter (data: any[]): any[] {
      if (this.actualFilters && this.actualFilters.length > 0) {
        return data.filter(v => {
          return this.actualFilters.every(filter => {
            if (!filter.values || filter.values.length < 1) return true
            return filter.values.includes(v[filter.prop])
          })
        })
      }
      return data
    }

    doSort (data: any[]): any[] {
      let sort = this.actualSorter as DataSorter
      if (sort) {
        return data.sort((a, b) => {
          let [x, y] = [a[sort.prop], b[sort.prop]]
          return (x > y ? 1 : x < y ? -1 : 0) * (sort.order === 'desc' ? -1 : 1)
        })
      }
      return data
    }

    doPagination (data: any[]): any[] {
      if (!this.pageable) return data
      let start = (this.actualCurrentPage - 1) * this.actualPageSize
      return data.slice(start, start + this.actualPageSize)
    }

    // Sort
    onSort (prop: string, order?: 'asc' | 'desc') {
      let sorter: DataSorter | null = null
      if (order && prop) {
        sorter = {
          prop, order
        }
      }
      this.actualSorter = sorter
    }

    // Filter
    getFilterValues (prop: string): any[] {
      let filters = this.actualFilters
      let filter = filters.find(v => v.prop === prop)
      return (filter && filter.values) || []
    }

    setFilterValues (prop: string, values: any[]) {
      let filters = (this.actualFilters || []).slice(0)
      let filter = filters.find(v => v.prop === prop)
      if (!filter) {
        filter = { prop, values }
        filters.push(filter)
      } else {
        filter.values = values
      }
      this.actualFilters = filters
    }

    resetFilter (prop?: string) {
      let filters = (this.actualFilters || []).slice(0)
      if (prop) {
        this.actualFilters = filters.filter(v => v.prop !== prop)
      } else {
        this.actualFilters = []
      }
    }

    // Selection
    public resetSelection () {
      this.selectionKeySet.clear()
    }

    hasSelection (row: any) {
      return this.selectionKeySet.has(this.resolveRowKey(row))
    }

    get allSelected () {
      return this.renderedData.every(v => this.selectionKeySet.has(this.resolveRowKey(v)))
    }

    get hasSelected () {
      return this.renderedData.some(v => this.selectionKeySet.has(this.resolveRowKey(v)))
    }

    selectRow (row: any, selected: boolean) {
      if (selected) this.selectionKeySet.add(this.resolveRowKey(row))
      else this.selectionKeySet.delete(this.resolveRowKey(row))
    }

    selectAll (selected: boolean) {
      this.renderedData.forEach(v => {
        let key = this.resolveRowKey(v)
        if (selected) {
          this.selectionKeySet.add(key)
        } else {
          this.selectionKeySet.delete(key)
        }
      })
    }

    @Watch('selectionKeySet.tracker') selectionKeySetChange () {
      this.selectionChange(Array.from(this.selectionKeySet.rawSet))
    }
}
