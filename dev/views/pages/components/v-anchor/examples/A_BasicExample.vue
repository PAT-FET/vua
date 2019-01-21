<template>
<div>
   <div style="height:500px;overflow:auto;">
    <v-anchor :bounds="10" @change="change" style="right: 0px;">
        <v-anchor-link v-for="link in 20" :key="`link${link}`" :href="`#title-${link}`" :title="`title-${link}`">
            <v-anchor-link v-if="link===2" href="#title-child-2-1" title="title-child-2-1"/>
        </v-anchor-link>
    </v-anchor>
    <div ref="listWrapper">
        <template v-for="i in 20">
            <h1 :id="`title-${i}`" :key="i">{{ `title-${i}` }}</h1>
            <h2 v-if="i===2" id="title-child-2-1" :key="i+'-child'">title-child-2-1</h2>
        </template>
    </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  }
})
export default class BasicExample extends Vue {
  change (newHref: string, oldHref:string) {
    console.log(newHref + '----' + oldHref)
  }
}
</script>
