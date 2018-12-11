<template>
<div>
   <div :class="[$style.header]">
      <ul :class="$style.listGroup">
         <li :class="[$style.listGroupItem, activeCls('props')]" @click="changePanel('props')" v-if="props">PROPS</li>
         <li :class="[$style.listGroupItem, activeCls('events')]" @click="changePanel('events')" v-if="events">EVENTS</li>
         <li :class="[$style.listGroupItem, activeCls('slots')]" @click="changePanel('slots')" v-if="slots">SLOTS</li>
         <li :class="[$style.listGroupItem, activeCls('scopedSlots')]" @click="changePanel('scopedSlots')" v-if="scopedSlots">SCOPED SLOTS</li>
         <li :class="[$style.listGroupItem, activeCls('methods')]" @click="changePanel('methods')" v-if="methods">METHODS</li>
      </ul>
   </div>

   <div :class="[$style.body]">
      <div v-show="currentPanel === 'props'">
         <table :class="[$style.table]">
            <tbody>
            <template v-for="(prop, i) in props">
               <tr :key="'_title' + i" :class="[$style.tr0]">
                  <td>名称</td>
                  <td>默认值</td>
                  <td>类型</td>
               </tr>
               <tr :key="prop.name + i" :class="[$style.tr1]">
                  <td><code style="color: red;">{{prop.name}}</code></td>
                  <td>{{prop.default}}</td>
                  <td>{{prop.type}}</td>
               </tr>
               <tr :key="prop.desc + i" :class="[$style.tr2]">
                  <td colspan="3">
                     {{prop.desc}}
                  </td>
               </tr>
               <tr :key="'_placeholder' + i" :class="[$style.tr3]">
                  <td colspan="3"></td>
               </tr>
            </template>
            </tbody>
         </table>
      </div>
      <div v-show="currentPanel === 'events'">
         <table :class="[$style.table]">
            <tbody>
            <template v-for="(event, i) in events">
               <tr :key="'_title' + i" :class="[$style.tr0]">
                  <td>名称</td>
                  <td>值</td>
               </tr>
               <tr :key="event.name + i" :class="[$style.tr1]">
                  <td><code style="color: red;">{{event.name}}</code></td>
                  <td>{{event.value}}</td>
               </tr>
               <tr :key="event.desc + i" :class="[$style.tr2]">
                  <td colspan="2">
                     {{event.desc}}
                  </td>
               </tr>
               <tr :key="'placeholder' + i" :class="[$style.tr3]">
                  <td colspan="2"></td>
               </tr>
            </template>
            </tbody>
         </table>
      </div>
      <div v-show="currentPanel === 'slots'">
         <table :class="[$style.table]">
            <tbody>
            <template v-for="(slot, i) in slots">
               <tr :key="'_title' + i" :class="[$style.tr0]">
                  <td>名称</td>
               </tr>
               <tr :key="slot.name + i" :class="[$style.tr1]">
                  <td><code style="color: red;">{{slot.name}}</code></td>
               </tr>
               <tr :key="slot.desc + i" :class="[$style.tr2]">
                  <td>
                     {{slot.desc}}
                  </td>
               </tr>
               <tr :key="'placeholder' + i" :class="[$style.tr3]">
                  <td></td>
               </tr>
            </template>
            </tbody>
         </table>
      </div>
      <div v-show="currentPanel === 'scopedSlots'">
         <table :class="[$style.table]">
            <tbody>
            <template v-for="(scopedSlot, i) in scopedSlots">
               <tr :key="'_title' + i" :class="[$style.tr0]">
                  <td>名称</td>
                  <td>属性</td>
               </tr>
               <tr :key="scopedSlot.name + i" :class="[$style.tr1]">
                  <td><code style="color: red;">{{scopedSlot.name}}</code></td>
                  <td>{{scopedSlot.value}}</td>
               </tr>
               <tr :key="scopedSlot.desc + i" :class="[$style.tr2]">
                  <td colspan="2">
                     {{scopedSlot.desc}}
                  </td>
               </tr>
               <tr :key="'placeholder' + i" :class="[$style.tr3]">
                  <td colspan="2"></td>
               </tr>
            </template>
            </tbody>
         </table>
      </div>
      <div v-show="currentPanel === 'methods'">
         <table :class="[$style.table]">
            <tbody>
            <template v-for="(method, i) in methods">
               <tr :key="'_title' + i" :class="[$style.tr0]">
                  <td>名称</td>
                  <td>参数</td>
                  <td>返回值</td>
               </tr>
               <tr :key="method.name + i" :class="[$style.tr1]">
                  <td><code style="color: red;">{{method.name}}</code></td>
                  <td>{{method.params}}</td>
                  <td>{{method.returnVal}}</td>
               </tr>
               <tr :key="method.desc + i" :class="[$style.tr2]">
                  <td colspan="3">
                     {{method.desc}}
                  </td>
               </tr>
               <tr :key="'placeholder' + i" :class="[$style.tr3]">
                  <td colspan="3"></td>
               </tr>
            </template>
            </tbody>
         </table>
      </div>
   </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
  })
export default class ApiTable extends Vue {
  @Prop(Array) props!: any[]

  @Prop(Array) slots!: any[]

  @Prop(Array) scopedSlots!: any[]

  @Prop(Array) events!: any[]

  @Prop(Array) methods!: any[]

  currentPanel: string = 'props'

  activeCls (panel: string) {
    return this.currentPanel === panel ? this.$style.listGroupItemActive : ''
  }

  changePanel (panel: string) {
    this.currentPanel = panel
  }
}
</script>

<style lang="scss" module>
@import "~@/style/var.scss";

$header-height: 48px;

.header {
  height: $header-height;
  background-color: $bg-color;
}

.listGroup {
  list-style: none;
}

.listGroupItem {
  float: left;
  height: $header-height;
  line-height: $header-height;
  padding: 0 20px;
  cursor: pointer;
}
.listGroupItemActive {
  color: $heading-color;
  border-bottom: $primary-color solid 3px;
  transition: all 0.3s ease;
}

.body {
  background-color: $bg-color;
  padding: 10px;
  min-height: 60px;
}

.table {
  width: 100%;

  td {
    min-width: 180px;
  }
}

.tr0 {
  background-color: $bg-color-1;
  line-height: 22px;
  color: $text-color-secondary;
}

.tr1 {
  background-color: $bg-color-1;
  line-height: 22px;
  color: $heading-color;
}

.tr2 {
  background-color: $bg-color-2;
  line-height: 32px;
  color: $text-color-secondary;
}

.tr3 {
  background-color: $bg-color;
  height: 10px;
}
</style>
