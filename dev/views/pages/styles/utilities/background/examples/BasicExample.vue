<template>
   <div class="m-3">
       <div class="my-2" v-for="bg in list" :key="bg">
           <span class="d-inline-block w-6">{{bg}}</span> <div class=" w-4 h-1 mr-3 ml-2 d-inline-block align-middle" :class=[bg]></div>
       </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
    list = [
        'bg-primary',
        'bg-secondary',
        'bg-success',
        'bg-info',
        'bg-warning',
        'bg-error',
        'bg-base',
        'bg-1',
        'bg-2',
        'bg-disabled',
        'bg-active',
        'bg-blue',
        'bg-purple',
        'bg-cyan',
        'bg-green',
        'bg-pink',
        'bg-red',
        'bg-orange',
        'bg-yellow',
        'bg-volcano',
        'bg-geekblue',
        'bg-lime',
        'bg-gold',
        'bg-grey'
    ]
}
</script>

<style lang="scss" module>
.box{
    height: 80px;
    width: 80px;
    margin: 5px;
    display: inline-block;
}

</style>
