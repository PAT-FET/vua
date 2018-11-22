import { Provide, Vue, Prop, Component } from 'vue-property-decorator'
import { MenuMode } from '../menu'

@Component
export default class MenuProvider extends Vue {
    @Prop({ type: String, default: 'vertical' }) mode!: MenuMode

    @Prop(Boolean) collapse!: boolean

    @Prop(String) defaultActive!: string

    @Prop(Array) defaultOpeneds!: string[]

    @Prop(Boolean) uniqueOpened!: boolean

    @Prop({ type: String, default: 'hover'}) trigger!: boolean

    @Provide() menuMode (): string {
      return this.mode
    }

    @Provide() menuCollapse (): boolean {
      return this.collapse
    }

    @Provide() menuDefaultActive (): string {
      return this.defaultActive
    }

    @Provide() menuDefaultOpeneds (): string[] {
      return this.defaultOpeneds || []
    }

    @Provide() menuUniqueOpened (): boolean {
      return this.uniqueOpened
    }

    @Provide() menuTrigger (): boolean {
      return this.trigger
    }
}
