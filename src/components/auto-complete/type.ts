export interface AutoCompleteItem {
    title: string,
    count?: number
    children?: AutoCompleteItem[]
    [key: string]: any
}

export interface AutoCompleteSearchFn {
    (input: string, cb: (items: AutoCompleteItem[]) => void): void
}
