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
    const anchor = h('a', { class: [this.$style.anchor], on: { click: this.link } }, '# ')
    return h(`h${this.level}`, { attrs: { id: this.id } }, [this.$slots.default, anchor])
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
.anchor {
  margin-left: 5px;
  opacity: 0;
  transition: all .3s;
  &:hover {
    opacity: 1;
  }
}

</style>
