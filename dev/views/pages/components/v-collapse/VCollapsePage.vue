<template>
<div>
    <component-view :title="title" :examples="examples" :api="api">
        <div v-html="summary"></div>
   </component-view>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import summary from './summary.md'
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
  components: {
  },
  })
export default class VCollapsePage extends Vue {
    title: string = 'Collapse 折叠面板'

    summary: any = summary

    examples: any[] = examples

    api: any = api
}
</script>
