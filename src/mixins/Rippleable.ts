import { Component, Vue, Prop } from 'vue-property-decorator'
import { Ripple } from '@/directives'
import { RippleOptions } from '@/directives/ripple'

@Component({
  directives: { Ripple }
  })
export default class Rippleable extends Vue {
    @Prop({ type: [Boolean, Object], default: true }) ripple!: boolean | RippleOptions
}
