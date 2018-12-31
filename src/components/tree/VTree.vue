<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, TreeIterable, Node } from '../../mixins'
import { CreateElement, VNode } from 'vue'
import VTreeNode from './widget/VTreeNode.vue'

@Component({
  components: {
  VTreeNode
  },
  name: 'v-tree'
  })
export default class VTree extends mixins(Themeable, Bemable, TreeIterable) {
  @Prop(Boolean) defaultExpandAll!: boolean

  @Provide() getTree (): VTree {
    return this
  }

  render (h: CreateElement): VNode {
    return h('ul', { class: [this.b()] }, this.root.children.map(v => {
      let data = {
        props: {
          node: v
        }
      }
      return h('v-tree-node', data)
    }))
  }

  mounted () {
    if (this.defaultExpandAll) {
      this.expandAll()
    }
  }

  $scopedSlots!: {
    indicator: any,
    content: any
  }
}
</script>

<style src="./style/v-tree.scss" lang="scss"></style>
