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
          <v-date-panel
            show-week-of-year
            week-only
            v-show="panelVisible('date')"
            v-model="currentDate"
            :selected-date="date"
            :disabled-date="disabledDate"
            @select="onSelectDate"
            @switch-to="onSwitchPanel"></v-date-panel>
          <v-month-panel
            v-show="panelVisible('month')"
            v-model="currentDate"
            :selected-date="date"
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
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import DateHelper from '@/mixins/DateHelper'
import DatePicker from './mixins/DatePicker'
import VDatePanel from './widgets/VDatePanel.vue'
import VMonthPanel from './widgets/VMonthPanel.vue'
import VYearPanel from './widgets/VYearPanel.vue'
import VDecadePanel from './widgets/VDecadePanel.vue'
import { PickerPanelType } from '@/components/date-picker/date-picker'

@Component({
  components: {
  VDatePanel,
  VMonthPanel,
  VYearPanel,
  VDecadePanel
  },
  name: 'v-week-picker'
  })
export default class VWeekPicker extends mixins(Themeable, Bemable, DatePicker) {
  @Prop({ type: String, default: 'YYYY/WW' }) format!: string

  currentDate: Date = this.date || new Date()

  currentPanel: PickerPanelType = 'date'

  onSelectDate (date: Date) {
    this.model = this.formatDate(date)
    this.visible = false
  }

  onSelectMonth (date: Date) {
    this.currentPanel = 'date'
    this.currentDate = date
  }

  onSelectYear (date: Date) {
    this.currentPanel = 'month'
    this.currentDate = date
  }

  onSelectDecade (date: Date) {
    this.currentPanel = 'year'
    this.currentDate = date
  }

  onSwitchPanel (panel: PickerPanelType) {
    this.currentPanel = panel
  }

  onClear () {
    this.model = ''
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
        this.currentPanel = 'date'
      }, 300)
    }
  }

  mounted () {
    this.currentDate = this.date || new Date()
  }
}
</script>

<style src="./style/v-week-picker.scss" lang="scss"></style>
