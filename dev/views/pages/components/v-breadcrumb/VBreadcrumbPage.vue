<template>
<div>
   <component-view :title="title" :examples="examples" :api="api">
      <div v-html="breadcrumb"></div>
   </component-view>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import breadcrumb from './breadcrumb.md'
import api from './api'

const examples: any[] = []

function importComponentAll (r: any) {
  r.keys().forEach((key: string) => {
    examples.push({
      name: key.substr(1),
      component: r(key).default
    })
  })
}

function importSourceAll (r: any) {
  r.keys().forEach((key: string) => {
    let name = key.substr(1)
    let example = examples.find(v => v.name === name)
    if (example) {
      example.source = r(key)
    }
  })
}

importComponentAll(require.context(`./examples/`, true, /\.vue$/))
importSourceAll(require.context('!raw-loader!./examples/', true, /\.vue$/))

@Component({
  components: {},
  })
export default class VBreadcrumb extends Vue {
   title: string = 'VBreadcrumb 面包屑'

   examples: any[] = examples

   breadcrumb: string = breadcrumb

   api: any = api
}
</script>

<style lang="scss" scoped>

</style>
