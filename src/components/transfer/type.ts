export interface TransferItem {
    key: string | number,
    label: string,
    disabled?: boolean,
    [key: string]: any
}

export interface TransferFilterFn {
    (query: string, item: TransferItem): boolean
}
