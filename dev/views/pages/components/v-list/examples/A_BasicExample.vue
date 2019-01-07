<template>
<div>
  <div class="m-3">
    <p>默认尺寸</p>
    <v-list :data-source="dataSource" size="md" bordered>
      <v-list-item slot-scope="{item}">
        <slot>{{item.title}}</slot>
      </v-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </v-list>
  </div>

  <div class="m-3">
    <p>大尺寸</p>
    <v-list :data-source="dataSource" size="sm" bordered>
      <v-list-item slot-scope="{item}">
        <slot>{{item.title}}</slot>
      </v-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </v-list>
  </div>

  <div class="m-3">
    <p>小尺寸</p>
    <v-list :data-source="dataSource" size="lg" bordered>
      <v-list-item slot-scope="{item}">
        <slot>{{item.title}}</slot>
      </v-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </v-list>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  简单列表
 * @desc 列表拥有大、中、小三种尺寸。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  dataSource = [
    {
      title: 'Racing car sprays burning fuel into crowd.'
    },
    {
      title: 'Japanese princess to wed commoner.',
    },
    {
      title: 'Australian walks 100km after outback crash.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Los Angeles battles huge wildfires.',
    }]
}
</script>
