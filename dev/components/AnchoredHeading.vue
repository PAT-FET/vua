<script lang="ts">
import { Component, Vue, Prop, Provide, Inject } from 'vue-property-decorator'

let index = 1
function generateAnchorId () {
  return 'anchored-' + index++
}

@Component({
  components: {},
  })
export default class AnchoredHeading extends Vue {
  @Prop({type: Number, default: 3}) level!: number

  id: string = generateAnchorId()

  render (h: any) {
    const anchor = h('a', { on: { click: this.link } }, '# ')
    return h(`h${this.level}`, { attrs: { id: this.id } }, [anchor, this.$slots.default])
  }

  link () {
    const $target = document.getElementById(this.id)
    if ($target) $target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }

  @Inject() addAnchor!: (anchor: AnchoredHeading) => void

  mounted () {
    this.addAnchor(this)
  }
}
</script>

<style lang="scss" module>
</style>
