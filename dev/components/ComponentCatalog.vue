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
      if (anchor.level < 2) return
      let data = {
        'class': [this.$style.anchor],
        style: [this.offsetStyle(anchor.level)],
        on: { click: () => { this.link(anchor.id) } }
      }
      let item = h('li', {}, [h('a', data, [anchor.$slots.default])])
      list.push(item)
    })
    let current = h('ul', { 'class': [this.$style.box] }, list)
    return current
  }

  offsetStyle (level: number) {
    let offset = ((level - 2) * 0.5) + 'rem'
    return {
      paddingLeft: offset
    }
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
