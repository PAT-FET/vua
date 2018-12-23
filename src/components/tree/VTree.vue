<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import TreeIterable from '@/mixins/tree-iterable'
import { CreateElement, VNode } from 'vue'
import Node from '@/mixins/tree-iterable/Node'
import VTreeNode from './widget/VTreeNode.vue'

@Component({
  components: {
  VTreeNode
  },
  name: 'v-tree'
  })
export default class VTree extends mixins(Themeable, Bemable, TreeIterable) {
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
}
</script>

<style src="./style/v-tree.scss" lang="scss"></style>
