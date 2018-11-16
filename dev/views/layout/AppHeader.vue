<template>
<div :class="[$style.container]" class="bg-primary px-4">
    <p class="dislay-4">Vua</p>
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
}
</script>

<style lang="scss" module>
.container{
    height: 60px;
    line-height: 60px;
    position: sticky;
    top: 0;
    display: flex;
    z-index: 5000;
    justify-content: space-between;
}

.themeBtn{
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
}
</style>
