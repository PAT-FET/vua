import { Vue, Prop, Inject, Component } from 'vue-property-decorator'
import { MenuMode, MenuCssVariable } from '../type'

@Component
export default class MenuInjector extends Vue {
    @Prop(String) index!: string

    @Inject() menuMode!: () => string

    @Inject() menuCollapse!: () => boolean

    @Inject() menuDefaultActive!: () => string

    @Inject() menuDefaultOpeneds!: () => string[]

    @Inject() menuUniqueOpened!: () => boolean

    @Inject() menuTrigger!: () => boolean

    @Inject() getMenuCssVariable!: () => MenuCssVariable

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

    get key () {
      return this.resolveKey(this)
    }

    get menuCssVariable (): MenuCssVariable {
      return this.getMenuCssVariable()
    }

    resolveKey (item: MenuInjector): any {
      return item.index || item
    }
}
