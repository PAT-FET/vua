<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, VNodeData, VNode } from 'vue'

@Component({
  components: {
  },
  })
export default class NavMenu extends Vue {
    @Prop(Array) data!: any[]

    render (h: CreateElement) {
      return this.generateList(h, this.data)
    }

    generateList (h: CreateElement, list: any[], level: number = 1): VNode {
      let children = list.map(v => {
        let childNodes = null
        if (v.children) {
          childNodes = [h('div', { 'class': [this.$style.item, this.$style.title, `pl-${this.computePadding(level)}`] }, v.name), this.generateList(h, v.children, level + 1)]
        } else {
          childNodes = [h('div', { 'class': [this.$style.item, `pl-${this.computePadding(level)}`], 'on': { click: () => this.link(v.path) } }, v.name)]
        }
        let item = h('li', {}, childNodes)
        return item
      })
      return h('ul', { 'class': [this.$style.listGroup] }, children)
    }

    link (path: string) {
      this.$router.push(path)
    }

    computePadding (level: number) {
      return level * 2 > 5 ? 5 : level * 2
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
