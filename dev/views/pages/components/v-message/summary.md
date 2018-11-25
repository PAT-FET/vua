全局展示操作反馈信息。该组件作为一个单例组件，请使用 $message 服务调用

提供以下方法：
- $message.success(content, [duration])

- $message.error(content, [duration])

- $message.info(content, [duration])

- $message.warning(content, [duration])

- $message.loading(content, [duration])

全局配置：
    $message.config(options)