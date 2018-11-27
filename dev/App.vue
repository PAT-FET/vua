<template>
  <div id="app">
   <div :class="[$style.container]">
     <app-aside :class="[$style.aside]"></app-aside>
     <div :class="[$style.content]">
       <app-header></app-header>
       <div class="p-4" v-loading="loading">
         <transition name="fade-transition" mode="out-in"><router-view/></transition>
       </div>
     </div>
   </div>
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
