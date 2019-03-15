export interface DataPagination {
    currentPage: number
    pageSize: number
    total: number
}

export interface DataSorter {
    prop: string
    order: 'desc' | 'asc'
}

export interface DataFilter {
    prop: string
    values: any[]
}

export interface DataRowKeyFunc {
    (row: any): string
}

export interface DataRemoteChangeParam {
    pagination: DataPagination
    sorter: DataSorter| null
    filters: DataFilter[]
}

export type DataRemoteChangeType = 'currentPage' | 'pageSize' | 'sorter' | 'filter'
