<template>
<div :class="[$style.container]">
    <div class="d-flex align-items-center">
        <img class="d-inline-block" style="width: 1.5rem;" src="../../assets/images/logo.jpg" alt="&times;">
        <div class="headline d-inline-block ml-3">VUA</div>
    </div>

    <div class="d-flex align-items-center">
        <v-menu mode="horizontal" default-active="components" size="lg">
            <v-menu-item index="home" style="line-height: 4rem;">首页</v-menu-item>
            <v-menu-item index="components" style="line-height: 4rem;">组件</v-menu-item>
            <v-menu-item index="principle" style="line-height: 4rem;">原则</v-menu-item>
            <v-menu-item index="resource" style="line-height: 4rem;">设计资源</v-menu-item>
        </v-menu>

        <v-select class="align-middle w-6 ml-4" v-model="lang" >
            <v-option label="中文" value="zh-Hans"></v-option>
            <v-option label="English" value="en"></v-option>
        </v-select>

        <div class="ml-3">
            <v-popover trigger="click" placement="bottom-end">
                <div class="border rounded" :class="[$style.themeBtn]" slot="reference">
                    <div class="bg-primary"></div>
                </div>
                <div class="py-2">
                    <div><v-switch v-model="dark"></v-switch> 明/暗模式</div>
                   <div class="mt-3">
                        <div class="my-2">
                            <input type="color" v-model="$vua.theme.primary"> <span class="text-primary ml-2">Primary  </span>
                        </div>
                        <div class="my-2">
                            <input type="color" v-model="$vua.theme.secondary"> <span class="text-secondary ml-2">Secondary  </span>
                        </div>
                        <div class="my-2">
                            <input type="color" v-model="$vua.theme.success"> <span class="text-success ml-2">Success  </span>
                        </div>
                        <div class="my-2">
                            <input type="color" v-model="$vua.theme.info"> <span class="text-info ml-2">Info  </span>
                        </div>
                        <div class="my-2">
                            <input type="color" v-model="$vua.theme.warning"> <span class="text-warning ml-2">Warning  </span>
                        </div>
                        <div class="my-2">
                            <input type="color" v-model="$vua.theme.error"> <span class="text-error ml-2">Error  </span>
                        </div>
                    </div>
                </div>
            </v-popover>
        </div>
    </div>

    <!-- <div :class="[$style.toggle]">
        <i class="anticon anticon-bars" :class="[$style.icon]" @click="toggleAside"></i>
        &nbsp;
        Vua
    </div>
    <div>
        <v-select class="align-middle" style="width: 80px;" v-model="lang" size="sm">
            <v-option label="中文" value="zh-Hans"></v-option>
            <v-option label="English" value="en"></v-option>
        </v-select>

        <v-popover trigger="click">
        <v-button title="设置主题色" slot="reference" type="primary" class="ml-3" shape="circle" size="sm" color="error" icon="setting"></v-button>
         <div>
             <div class="my-2">
                <span class="text-primary">Primary  </span>  <input type="color" v-model="$vua.theme.primary">
            </div>
            <div class="my-2">
                <span class="text-secondary">Secondary  </span>  <input type="color" v-model="$vua.theme.secondary">
            </div>
            <div class="my-2">
                <span class="text-success">Success  </span>  <input type="color" v-model="$vua.theme.success">
            </div>
            <div class="my-2">
                <span class="text-info">Info  </span>  <input type="color" v-model="$vua.theme.info">
            </div>
            <div class="my-2">
                <span class="text-warning">Warning  </span>  <input type="color" v-model="$vua.theme.warning">
            </div>
            <div class="my-2">
                <span class="text-error">Error  </span>  <input type="color" v-model="$vua.theme.error">
            </div>
         </div>
        </v-popover>
        <v-button title="切换主题" class="ml-3" shape="circle" type="primary" size="sm" color="warning" icon="bulb" @click="toggleTheme"></v-button>
    </div> -->
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

  get dark () {
    return !!this.$vua.dark
  }

  set dark (dark: boolean) {
    this.$vua.dark = dark
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
    align-items: center;
    height: 100%;
    padding: 0 2rem;
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

.themeBtn {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    position: relative;
    &>* {
        position: absolute;
        top: 2px;
        bottom: 2px;
        left: 2px;
        right: 2px;
        border-radius: 2px;
    }
}
</style>
