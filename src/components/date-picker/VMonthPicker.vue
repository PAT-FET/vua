<template>
<div :class="[b()]">
  <v-popper
   :class="[e('popper')]"
   :visible.sync="visible"
   :arrow="false"
   :append-to-body="appendToBody"
   :delay="50"
   :disabled="disabled"
   :options="options"
   :gutter="gutter"
   :trigger="trigger">
    <v-input
        slot="reference"
        readonly
        :clearable="clearable"
        :value="model"
        :class="[e('input')]"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        @clear="onClear">
        <i slot="suffix" class="anticon anticon-calendar"></i>
      </v-input>
    <div :class="[e('content')]">
        <!-- <div :class="[e('header')]">
        </div> -->
        <div :class="[e('body')]">
          <v-month-panel
            v-show="panelVisible('month')"
            v-model="currentDate"
            :selected-date="date"
            :disabled-date="disabledDate"
            @select="onSelectMonth"
            @switch-to="onSwitchPanel"></v-month-panel>
          <v-year-panel
            v-show="panelVisible('year')"
            v-model="currentDate"
            :selected-date="date"
            @select="onSelectYear"
            @switch-to="onSwitchPanel"></v-year-panel>
           <v-decade-panel
            v-show="panelVisible('decade')"
            v-model="currentDate"
            :selected-date="date"
            @select="onSelectDecade"></v-decade-panel>
        </div>
        <div :class="[e('footer')]">
          <div :class="[e('footer-btn')]">
          </div>
        </div>
    </div>
  </v-popper>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, DateHelper } from '../../mixins'
import DatePicker from './mixins/DatePicker'
import VMonthPanel from './widgets/VMonthPanel.vue'
import VYearPanel from './widgets/VYearPanel.vue'
import VDecadePanel from './widgets/VDecadePanel.vue'
import { PickerPanelType } from './type'

@Component({
  components: {
  VMonthPanel,
  VYearPanel,
  VDecadePanel
  },
  name: 'v-month-picker'
  })
export default class VMonthPicker extends mixins(Themeable, Bemable, DatePicker) {
  @Prop({ type: String, default: 'YYYY/MM' }) format!: string

  currentDate: Date = this.date || new Date()

  currentPanel: PickerPanelType = 'month'

  onSelectMonth (date: Date) {
    this.model = this.formatDate(date)
    this.visible = false
  }

  onSelectYear (date: Date) {
    this.currentPanel = 'month'
    this.currentDate = date
  }

  onSelectDecade (date: Date) {
    this.currentPanel = 'year'
    this.currentDate = date
  }

  onClear () {
    this.model = ''
  }

  onSwitchPanel (panel: PickerPanelType) {
    this.currentPanel = panel
  }

  panelVisible (panel: PickerPanelType) {
    return panel === this.currentPanel
  }

  @Watch('date') dateChange (date: Date) {
    this.currentDate = this.date || new Date()
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (!visible) {
      setTimeout(() => {
        this.currentPanel = 'month'
      }, 300)
    }
  }
}
</script>

<style src="./style/v-month-picker.scss" lang="scss"></style>
