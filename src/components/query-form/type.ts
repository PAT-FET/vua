export interface QueryFormField {
    name: string
    title: string
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
