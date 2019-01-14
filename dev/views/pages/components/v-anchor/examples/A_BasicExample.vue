<template>
<div>
   <div style="height:500px;overflow:auto;">
    <v-anchor style="fload:right;">
        <v-anchor-link v-for="link in 40" :key="`link${link}`" :href="`#title-${link}`" :title="`title-${link}`">
           <!--  <v-anchor-link  v-if="link === 61" href="#title-child-69" title="title-child-69"/> -->
        </v-anchor-link>
        <v-anchor-link  href="#lishi" title="李氏专跳"/>
        <v-anchor-link  href="#new-link" title="这是动态添加的连接"/>
    </v-anchor>
    <div ref="listWrapper">
        <template v-for="i in 40">
            <h1 :id="`title-${i}`" :key="i">{{ `title-${i}` }}</h1>
        </template>

        <h1 id="lishi">李氏专跳</h1>
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
}
</script>
