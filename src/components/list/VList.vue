<template>
<div :class="[b(), borderedCls, sizeCls, splitCls]">
  <div :class="[e('header')]" v-if="$slots.header"><slot name="header"></slot></div>
  <div :class="[e('body')]">
    <div :class="[e('list')]">
      <v-row v-bind="rowProps" v-if="grid">
        <v-col v-bind="colProps" v-for="(item, i) in renderedData" :key="i">
          <div :class="[e('item')]">
            <slot :item="item"></slot>
          </div>
        </v-col>
        <template v-if="loading">
          <v-col v-for="i in 3" :key="'loading_' + i" v-bind="colProps">
             <div :class="[e('loading')]">
              <div><v-skeleton :paragraph="paragraph" :avatar="true" active></v-skeleton></div>
            </div>
          </v-col>
        </template>
      </v-row>
      <template v-else>
        <div :class="[e('item')]" v-for="(item, i) in renderedData" :key="i">
            <slot :item="item"></slot>
        </div>
        <div :class="[e('loading')]" v-if="loading">
          <div v-for="i in 3" :key="i"><v-skeleton :paragraph="paragraph" :avatar="true" active></v-skeleton></div>
        </div>
      </template>
    </div>
  </div>
  <div :class="[e('footer')]" v-if="$slots.footer"><slot name="footer"></slot></div>
  <div :class="[e('pagination')]" v-if="pageable">
    <v-pagination v-if="pageable" :total="total" :current-page.sync="actualCurrentPage" :page-size.sync="actualPageSize"></v-pagination>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, DataIterable, Gridable } from '../../mixins'
import { ListSize, ListItemLayout } from './type'
import { VRow, VCol } from '../grid'
import { VSkeleton } from '../skeleton'

@Component({
  components: {
  VRow,
  VCol
  },
  name: 'v-list'
  })
export default class VList extends mixins(Themeable, Bemable, DataIterable, Gridable) {
  @Prop(Boolean) bordered!: boolean

  @Prop({ type: String, default: 'md'}) size!: ListSize

  @Prop({ type: Boolean, default: true }) split!: boolean

  @Prop({type: String, default: 'horizontal'}) layout!: ListItemLayout

  @Prop(Boolean) loading!: boolean

  paragraph = {
    rows: 1
  }

  @Provide() getLayout (): ListItemLayout {
    return this.layout
  }

  get borderedCls () {
    return this.bordered ? this.m('bordered') : ''
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get splitCls () {
    return this.split ? this.m(`split`) : ''
  }
}
</script>

<style src="./style/v-list.scss" lang="scss"></style>
