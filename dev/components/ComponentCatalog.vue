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
        props: {
          href: `#${anchor.id}`,
          title: anchor.$slots.default[0].text
        },
        'class': [this.$style[`item${anchor.level}`]]
      }
      let item = h('v-scrollspy-item', data)
      list.push(item)
    })
    let current = h('v-scrollspy', { 'class': [this.$style.box], props: { target: '#content', offset: 30 } }, list)
    return current
  }

  offsetStyle (level: number) {
    let offset = ((level - 2) * 0.5) + 'rem'
    return {
      paddingLeft: offset
    }
  }

  levelStyle (level: number) {
    if (level === 2) {
      return {
        fontWeight: 'bold'
      }
    }
    return {}
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
        padding: 0 0 0 1.5rem;
        list-style: none;
        font-size: .75rem;
    }

    .anchor {
      color: var(--text-color);
    }

    .item2 {
      color: var(--text-color);
      font-size: .75rem;
      font-weight: bold;
    }
    .item3 {
      color: var(--text-color-secondary);
      font-size: .75rem;
      padding: .125rem .5rem;
    }
</style>
