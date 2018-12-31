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
        :value="model"
        :clearable="clearable"
        :class="[e('input')]"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        @clear="onClear">
        <i slot="suffix" class="anticon anticon-calendar"></i>
      </v-input>
    <div :class="[e('content')]">
        <div :class="[e('header')]">
          <div :class="[e('header-input-wrap')]">
            <input :class="[e('header-input')]" v-model.lazy="model">
            <div :class="[e('clear')]" v-if="clearable" @click="onClear"><i class="anticon anticon-close-circle"></i></div>
          </div>
        </div>
        <div :class="[e('body')]">
          <v-time-panel
            v-if="showTime"
            :visible="panelVisible('time')"
            :date="date || currentDate"
            :disabled-time="disabledTime"
            @update:date="onTimeUpdate"></v-time-panel>
          <v-date-panel
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
          <div :class="[e('footer-btn'), showTimeCls]">
            <template v-if="showTime">
             <a @click="onSelectToday">{{nowText}}</a>
             <a @click="onSelectDateTime">{{selectDateTimeText}}</a>
            </template>
            <template v-else>
              <a @click="onSelectToday">{{todayText}}</a>
            </template>
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
import VTimePanel from './widgets/VTimePanel.vue'
import VDatePanel from './widgets/VDatePanel.vue'
import VMonthPanel from './widgets/VMonthPanel.vue'
import VYearPanel from './widgets/VYearPanel.vue'
import VDecadePanel from './widgets/VDecadePanel.vue'
import { PickerPanelType } from './type'

@Component({
  components: {
  VTimePanel,
  VDatePanel,
  VMonthPanel,
  VYearPanel,
  VDecadePanel
  },
  name: 'v-date-picker'
  })
export default class VDatePicker extends mixins(Themeable, Bemable, DatePicker) {
  @Prop({ type: String }) format!: string

  currentDate: Date = this.date || new Date()

  currentPanel: PickerPanelType = 'date'

  // overwrite DateHelper
  get actucalFormat () {
    if (this.showTime) return 'YYYY/MM/DD HH:mm:ss'
    return 'YYYY/MM/DD'
  }

  get todayText () {
    return this.t('today')
  }

  get nowText () {
    return this.t('now')
  }

  get selectDateTimeText () {
    return this.currentPanel === 'time' ? this.t('selectDate') : this.t('selectTime')
  }

  get showTimeCls () {
    return this.showTime ? 'is-show-time' : ''
  }

  onTimeUpdate (date: Date) {
    this.model = this.formatDate(date)
  }

  onSelectDate (date: Date) {
    let d = date
    if (this.showTime && this.date) {
      d = new Date(date)
      d.setHours(this.date.getHours())
      d.setMinutes(this.date.getMinutes())
      d.setSeconds(this.date.getSeconds())
    }
    this.model = this.formatDate(d)
    if (!this.showTime) this.visible = false
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

  onSelectToday () {
    this.onSelectDate(new Date())
  }

  onSelectDateTime () {
    this.currentPanel = this.currentPanel === 'time' ? 'date' : 'time'
  }

  onOk () {
    this.visible = false
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
        this.currentPanel = 'date'
      }, 300)
    }
  }

  mounted () {
    this.currentDate = this.date || new Date()
  }
}
</script>

<style src="./style/v-date-picker.scss" lang="scss"></style>
