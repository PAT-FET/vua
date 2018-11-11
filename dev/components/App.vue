<template>
  <div id="app" class="container">
    <div class="aside">
      <ul class="aside-list">
        <li class="aside-list__item"
            :class="[{'is-active': demoName === currentDemoName}]"
            v-for="demoName in demoNames"
            :key="demoName"
            @click="currentDemoName = demoName"> {{demoName.substring(2)}} </li>
      </ul>
    </div>
    <div class="main">
      <component v-bind:is="currentDemoName"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

const pages: any = {}

const req = (require as any).context('', true, /index\.vue/)
const requireAll = (requireContext: any) => requireContext.keys().map((key: string) => {
  if (key.split('/').length !== 3) return
  let name = 'd-' + key.split('/')[1]
  const component = requireContext(key).default as Vue
  pages[name] = component
})
requireAll(req)

@Component({
  components: {...pages},
  })
export default class Demos extends Vue {
    public demoNames: string[] = [];

    public currentDemoName: string = '';

    loadDemoByUrl () {
      const hash = window.location.hash || ''
      let name = hash.substr(2)
      if (!name) return
      this.currentDemoName = name
    }

    public mounted () {
      this.demoNames = Object.keys(pages).map(key => key)
      this.loadDemoByUrl()
      window.addEventListener('hashchange', () => {
        this.loadDemoByUrl()
      })
    }

    @Watch('currentDemoName') currentDemoNameChange (currentDemoName: string) {
      window.location.hash = '/' + currentDemoName
    }
}
</script>

<style lang="scss">

  $--aside-width: 240px;

  .container{
    display: flex;
    justify-content: stretch;
    .aside{
      height: 100vh;
      overflow: auto;
      width: $--aside-width;
      background: #f8f9fc;
      border-right: 1px solid #e2e2e2;
      .aside-list{
        list-style: none;
        padding: 0;

        .aside-list__item{
          font-size: 14px;
          line-height: 22px;
          color: #666;
          margin: 4px 12px;
          padding: 4px 8px;

          &:hover,&.is-active{
            background: #e2e2e2;
            border-radius: 2px;
            cursor: pointer;
          }
        }
      }
    }
    .main{
      height: 100vh;
      overflow: auto;
      width: calc(100vw - #{$--aside-width});
      background: #f8f9fc;
      padding: 12px 8px;
    }
  }
</style>
