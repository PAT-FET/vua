<template>
<div :class="[$style.container]" class="bg-primary px-4">
    <div :class="[$style.toggle]">
        <i class="anticon anticon-bars" :class="[$style.icon]" @click="toggleAside"></i>
        &nbsp;
        Vua
    </div>
    <div :class="[$style.themeBtn]" @click="toggleTheme"><i class="anticon anticon-bulb"></i></div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
  })
export default class AppHeader extends Vue {
  toggleTheme () {
    this.$vua.dark = !this.$vua.dark
  }

  toggleAside () {
    let root = this.$root as any
    root.collapse = !root.collapse
  }
}
</script>

<style lang="scss" module>
.container{
    height: 60px;
    line-height: 60px;
    position: sticky;
    top: 0;
    display: flex;
    z-index: 10;
    justify-content: space-between;
}

.toggle{
    line-height: 60px;
    font-size: 1.5rem;
    color: #fff;
}

.icon{
    cursor: pointer;
    transition: transform .2s ease;
    &:hover{
        transform: scale(1.1);
    }
}

.themeBtn{
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
}
</style>
