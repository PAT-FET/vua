export type SelectSize = 'sm' | 'md' | 'lg'

export type SelectValue = string | string[] // | number | number[]

export interface SelectFilterFn {
    (input: string, item: SelectItem) : boolean
}

export interface SelectSearchFn {
    (input: string, cb: (items: SelectItem[])=>void): void
}

export interface SelectItem {
    value: string
    label: string
    disabled: boolean
    group?: string
}

export interface GroupedSelectItem {
    group?: string
    items: SelectItem[]
}
