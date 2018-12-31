import Node from './Node'

export interface TreeProps {
    label: string | TreePropsFn<string>
    children: string
    disabled: boolean | TreePropsFn<boolean>
    isLeaf: boolean | TreePropsFn<boolean>
}

export interface TreePropsFn<T> {
    (param: {data: any}) : T
}

export interface TreeNodeLoadFn {
    (param: {node: Node}, resolve: (data: any[]) => void): void
}

export interface TreeNodeFilterFn {
    (param: { node: Node, value: any }): boolean
}
