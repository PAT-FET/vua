import { Vue, Prop, Inject, Component } from 'vue-property-decorator'
import { MenuMode } from '../menu'

@Component
export default class MenuInjector extends Vue {
    @Inject() menuMode!: () => string

    @Inject() menuCollapse!: () => boolean

    @Inject() menuDefaultActive!: () => string

    @Inject() menuDefaultOpeneds!: () => string[]

    @Inject() menuUniqueOpened!: () => boolean

    @Inject() menuTrigger!: () => boolean

    get mode (): string {
      return this.menuMode()
    }

    get collapse (): boolean {
      return this.menuCollapse()
    }

    get parsedMode (): string {
      if (this.mode === 'inline' && this.collapse) return 'vertical'
      return this.mode
    }

    get defaultActive (): string {
      return this.menuDefaultActive()
    }

    get defaultOpeneds (): string[] {
      return this.menuDefaultOpeneds()
    }

    get uniqueOpened (): boolean {
      return this.menuUniqueOpened()
    }

    get trigger (): boolean {
      return this.menuTrigger()
    }
}
