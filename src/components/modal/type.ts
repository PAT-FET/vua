export type ModelType = 'success' | 'info' | 'warning' | 'error'

export interface ModalOption {
    content: string
    title: string
    type: string
    okText: string
    cancelText: string
}

export interface ModalItem extends ModalOption {
    visible: boolean
    resolve: () => void
    reject: () => void
}
