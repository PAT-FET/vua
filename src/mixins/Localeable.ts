import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { VuaLocale } from '@/vua'
import { getTranslation } from '@/utils/locale'

@Component
export default class Localeable extends Vue {
  @Prop(Object) locale!: VuaLocale

  t (key: string, ...params: Array<string | number>): string {
    if (this.locale) {
      const translation = getTranslation(this.locale, key)
      return translation.replace(/\{(\d+)\}/g, (match: string, index: string) => {
        return String(params[+index])
      })
    } else {
      return this.$vua.lang.t(key, ...params)
    }
  }
}
