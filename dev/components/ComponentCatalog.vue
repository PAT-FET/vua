<script lang="ts">
import { Component, Vue, Prop, Provide, Inject } from 'vue-property-decorator'
import AnchoredHeading from './AnchoredHeading.vue'
import { CreateElement } from 'vue'

@Component({
  components: {},
  })
export default class ComponentCatalog extends Vue {
  @Prop({type: Array, default: []}) anchors!: AnchoredHeading[]

  render (h: CreateElement) {
    let anchors = this.anchors || []
    if (!anchors || anchors.length < 1) return null
    const list: any[] = []
    anchors.forEach(anchor => {
      let item = h('li', {}, [h('a', { 'class': [`pl-${anchor.level}`, this.$style.anchor], on: { click: () => { this.link(anchor.id) } } }, [anchor.$slots.default])])
      list.push(item)
    })
    let current = h('ul', { 'class': [this.$style.box] }, list)
    return current
  }

  link (id: string) {
    const $target = document.getElementById(id)
    if ($target) $target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
</script>

<style lang="scss" module>
    .box{
        position: sticky;
        top: 80px;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: .75rem;
    }

    .anchor {
      color: var(--text-color);
    }
</style>
