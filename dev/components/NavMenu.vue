<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNodeData, VNode } from 'vue'
import { generateGroups } from './menu-info'

@Component({
  components: {
  },
  })
export default class NavMenu extends Vue {
    @Prop(Array) data!: any[]

    render (h: CreateElement) {
      return h('v-menu', { props: { mode: 'inline', defaultActive: this.$route.path, uniqueOpened: true, collapse: (this.$root as any).collapse } }, this.generateList(h, this.data))
    }

    generateList (h: CreateElement, list: any[]): VNode[] {
      let children = list.map(v => {
        let childNodes = null
        if (v.children) {
          if (v.name === 'components') {
            let groups: any[] = generateGroups(v.children)
            let menuGroups = groups.map(group => {
              let items = group.children.map((item: any) => {
                return h('v-menu-item', { props: { index: item.path }, 'nativeOn': { click: () => this.link(item.path) } }, item.title)
              })
              return h('v-menu-group', {}, [
                h('span', { slot: 'title' }, group.title),
                ...items
              ])
            })
            childNodes = h('v-sub-menu', {}, [h('span', { slot: 'title' }, v.name), ...this.icon(h, v.name), ...menuGroups])
          } else {
            childNodes = h('v-sub-menu', {}, [h('span', { slot: 'title' }, v.name), ...this.icon(h, v.name), this.generateList(h, v.children)])
          }
        } else {
          childNodes = h('v-menu-item', { props: { index: v.path }, 'nativeOn': { click: () => this.link(v.path) } }, v.name)
        }
        // let item = h('li', {}, childNodes)
        return childNodes
      })
      return children
    }

    link (path: string) {
      this.$router.push(path)
    }

    icon (h: CreateElement, name: string) {
      let arr = []
      if (name === 'components') {
        arr.push(h('i', { 'class': ['anticon', 'anticon-compass'], slot: 'icon' }))
      } else if (name === 'directives') {
        arr.push(h('i', { 'class': ['anticon', 'anticon-key'], slot: 'icon' }))
      } else if (name === 'framework') {
        arr.push(h('i', { 'class': ['anticon', 'anticon-desktop'], slot: 'icon' }))
      } else if (name === 'styles') {
        arr.push(h('i', { 'class': ['anticon', 'anticon-smile'], slot: 'icon' }))
      }
      return arr
    }

  // $style: any = {}
}
</script>

<style lang="scss" module>
@import "~@/style/var.scss";

.item {
    line-height: 32px;
    text-align: left;
    cursor: pointer;
    &:hover{
        background-color: $bg-color-1;
    }
}

.title {
    color: $heading-color;
    font-weight: $font-weight-medium;
}

.listGroup{
    margin: 0;
    padding: 0;
    list-style: none;
}

</style>
