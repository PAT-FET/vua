import { $message } from './index'
import $notification from './notification'
declare module 'vue/types/vue' {
    interface Vue {
        $message: typeof $message
        $notification: typeof $notification
    }
}
