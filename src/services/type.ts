import $message from './message'
import $notification from './notification'
import $modal from './modal'
declare module 'vue/types/vue' {
    interface Vue {
        $message: typeof $message
        $notification: typeof $notification
        $modal: typeof $modal
    }
}
