export interface QueryFormField {
    name: string
    title: string
    [key: string]: any
}

export interface QueryFormGroup {
    title: string
    fields: QueryFormField[]
}

export interface QueryFormSection {
    title: string
    items: Array<QueryFormGroup | QueryFormField>
}

export interface QueryFormOptions{
    items: Array<QueryFormSection | QueryFormGroup | QueryFormField>
}

export interface QueryFormTag {
    title: string,
    text: string,
    name: string,
    removeFn?: (form: any, name: string) => void
}

export interface QueryFormTagFn {
    (param: { form: any, name: string, title: string}): QueryFormTag[]
}
