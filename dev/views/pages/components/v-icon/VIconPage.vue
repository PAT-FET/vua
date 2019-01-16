<template>
<div>
    <component-view :title="title" :examples="examples" :api="api">
        <div v-html="summary"></div>

        <div class="mt-5"></div>
        <anchored-heading :level="2">图标的命名规范</anchored-heading>
        <div v-html="naming"></div>

        <div class="mt-5"></div>
        <anchored-heading :level="2">图标的设计规范</anchored-heading>
        <div v-html="design"></div>
        <div>
          <img class="ml-4 mt-3" src="../../../../assets/images/1.jpg" alt="&times;">
          <img class="ml-4 mt-3" src="../../../../assets/images/2.jpg" alt="&times;">
          <img class="ml-4 mt-3" src="../../../../assets/images/3.jpg" alt="&times;">
          <img class="ml-4 mt-3" src="../../../../assets/images/4.jpg" alt="&times;">
          <img class="ml-4 mt-3" src="../../../../assets/images/5.jpg" alt="&times;">
        </div>

        <div class="mt-5"></div>
        <anchored-heading :level="2">图标列表</anchored-heading>

        <div v-for="catalog in icons" :key="catalog.title">
          <div class="mt-4"></div>
          <anchored-heading :level="3">{{catalog.title}}</anchored-heading>

          <div class="d-flex flex-wrap">
            <div v-for="icon in catalog.list" :key="icon" class="h-6 w-8 m-2" :class="[$style.box]">
              <div>
                <div class="ft-24 text-center"><v-icon :type="icon"></v-icon></div>
                <div class="text-center mt-2 ft-12">{{icon}}</div>
              </div>
            </div>
          </div>
        </div>

   </component-view>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import summary from './summary.md'
import naming from './naming.md'
import design from './design.md'
import api from './api'
import { icons } from './icons'

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
export default class VAlertPage extends Vue {
    title: string = 'Icon 图标'

    summary: any = summary

    naming: any = naming

    design: any = design

    examples: any[] = examples

    api: any = api

    icons = icons
}
</script>

<style lang="scss" module>
  .box {
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: var(--primary-base);
      transition: all .2s;
      &>* {
        color: #fff;
      }
      & i {
        transform: scale(1.2);
        transition: all .3s;
      }
    }
  }
</style>
