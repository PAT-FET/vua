全局展示通知提醒信息。

提供以下方法：
- $notification.open ({
    key: string
    title: string
    message: string
    type: string
    duration: number
    placement: NotificationPlacement
})
- $notification.success(title, message, [key], [duration])

- $notification.error(title, message, [key], [duration])

- $notification.info(title, message, [key], [duration])

- $notification.warning(title, message, [key], [duration])

全局配置：
    $notification.config({
        duration: number
        maxCount: number
        placement: NotificationPlacement
    })