<template>
<div :class="[$style.container]">
    <div :class="[$style.toggle]">
        <i class="anticon anticon-bars" :class="[$style.icon]" @click="toggleAside"></i>
        &nbsp;
        Vua
    </div>
    <div>
        <select v-model="lang">
            <option value="zh-Hans">中文</option>
            <option value="en">English</option>
        </select>

        &nbsp;

        <span :class="[$style.themeBtn]" @click="toggleTheme"><i class="anticon anticon-bulb"></i></span>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
  },
  })
export default class AppHeader extends Vue {
  lang: string = "en"

  toggleTheme () {
    this.$vua.dark = !this.$vua.dark
  }

  toggleAside () {
    let root = this.$root as any
    root.collapse = !root.collapse
  }

  @Watch('lang') langChange (lang: string) {
    this.$vua.lang.current = lang
  }
}
</script>

<style lang="scss" module>
.container{
    display: flex;
    justify-content: space-between;
}

.toggle{
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
