import { Provide, Vue, Prop, Component } from 'vue-property-decorator'
import { MenuCssVariable } from '../type'
import CssVariable from '../../../mixins/CssVariable'
import { mixins } from 'vue-class-component'

@Component
export default class MenuTheme extends mixins(CssVariable) {
    @Prop() cssVariable!: MenuCssVariable
}
