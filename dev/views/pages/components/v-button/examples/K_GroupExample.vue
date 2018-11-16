<template>
<div>
  <div class="my-3">
    <v-button-group>
      <v-button color="primary" type="outline"> <i class="anticon anticon-fast-backward"></i> 上一页</v-button>
      <v-button color="primary" type="outline"> 下一页 <i class="anticon anticon-fast-forward"></i></v-button>
    </v-button-group>
  </div>

  <div class="m-3 d-inline-block">
    <v-button-group>
      <v-button color="primary" type="outline"><i class="anticon anticon-chrome"></i></v-button>
      <v-button color="primary" type="outline"><i class="anticon anticon-ie"></i></v-button>
      <v-button color="primary" type="outline"><i class="anticon anticon-facebook"></i></v-button>
      <v-button color="primary" type="outline"><i class="anticon anticon-alipay"></i></v-button>
      <v-button color="primary" type="outline"><i class="anticon anticon-ant-design"></i></v-button>
    </v-button-group>
  </div>

  <div class="m-3 d-inline-block">
    <v-button-group>
      <v-button color="primary"><i class="anticon anticon-chrome"></i></v-button>
      <v-button color="primary"><i class="anticon anticon-ie"></i></v-button>
      <v-button color="primary"><i class="anticon anticon-facebook"></i></v-button>
      <v-button color="primary"><i class="anticon anticon-alipay"></i></v-button>
      <v-button color="primary"><i class="anticon anticon-ant-design"></i></v-button>
    </v-button-group>
  </div>

  <div class="m-3 d-inline-block">
    <v-button-group>
      <v-button color="primary" type="depressed"><i class="anticon anticon-chrome"></i></v-button>
      <v-button color="primary" type="depressed"><i class="anticon anticon-ie"></i></v-button>
      <v-button color="primary" type="depressed"><i class="anticon anticon-facebook"></i></v-button>
      <v-button color="primary" type="depressed"><i class="anticon anticon-alipay"></i></v-button>
      <v-button color="primary" type="depressed"><i class="anticon anticon-ant-design"></i></v-button>
    </v-button-group>
  </div>

  <div class="m-3 d-inline-block">
    <v-button-group>
      <v-button color="primary" type="flat"><i class="anticon anticon-chrome"></i></v-button>
      <v-button color="primary" type="flat"><i class="anticon anticon-ie"></i></v-button>
      <v-button color="primary" type="flat"><i class="anticon anticon-facebook"></i></v-button>
      <v-button color="primary" type="flat"><i class="anticon anticon-alipay"></i></v-button>
      <v-button color="primary" type="flat"><i class="anticon anticon-ant-design"></i></v-button>
    </v-button-group>
  </div>
</div>

</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   按钮组
 * @desc 使用 v-button-group 将按钮分组
 */
@Component({
  components: {
  },
  })
export default class GroupExample extends Vue {

}
</script>
