export type NotificationPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface NotificationOption {
    key: string
    title: string
    message: string
    type: string
    duration: number
    placement: NotificationPlacement
}

export interface NotificationConfigOption {
    duration: number
    maxCount: number
    placement: NotificationPlacement
}

export interface NotificationItem extends NotificationOption{
    close: () => void
    timer: any
}
