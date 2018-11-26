import { $message } from './index'
declare module 'vue/types/vue' {
    interface Vue {
        $message: typeof $message
    }
}
