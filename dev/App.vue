<template>
  <div id="app">
   <v-layout>
     <v-sider>
       <app-aside></app-aside>
     </v-sider>
     <v-layout>
       <v-header class="bg-primary">
         <app-header></app-header>
       </v-header>
       <v-content style="max-height: calc(100vh - 64px); overflow: auto;" v-loading="loading">
        <div class="p-4">
         <transition name="fade-transition" mode="out-in"><router-view/></transition>
        </div>
       </v-content>
     </v-layout>
   </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppAside from './views/layout/AppAside.vue'
import AppHeader from './views/layout/AppHeader.vue'
import store from './store'

@Component({
  components: {
  AppAside,
  AppHeader
  },
  })
export default class App extends Vue {
  get loading () {
    return store.loading
  }
}
</script>

<style lang="scss" module>
@import '~@/style/var.scss';

.container{
  display: flex;
}

.aside{
  flex-grow: 0;
  flex-shrink: 0;
}

.content{
  flex-grow: 1;
  flex-shrink: 1;
  height: 100vh;
  overflow: auto;
}

</style>
