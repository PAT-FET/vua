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
    <v-input-group :class="[e('input-range')]" slot="reference">
      <v-input
        readonly
        :placeholder="startPlaceholder"
        :value="model[0]"
        :class="[e('input')]"
        :size="size"
        :disabled="disabled">
      </v-input>
      <v-input :size="size" :disabled="disabled" :class="[e('input-separator')]" separator placeholder="~"></v-input>
      <v-input
        readonly
        :clearable="clearable"
        :placeholder="endPlaceholder"
        :value="model[1]"
        :class="[e('input')]"
        :size="size"
        :disabled="disabled"
        @clear="onClear">
        <i slot="suffix" class="anticon anticon-calendar"></i>
      </v-input>
    </v-input-group>
    <div :class="[e('content')]">
        <div :class="[e('header')]">
          <div :class="[e('header-input-wrap')]">
            <input :placeholder="startPlaceholder" :class="[e('header-input')]" v-model.lazy="model1">
            <input :class="[e('header-input-separator')]" placeholder="~">
            <input :placeholder="endPlaceholder" :class="[e('header-input')]" v-model.lazy="model2">
          </div>
        </div>
        <div :class="[e('body')]">
          <div></div>
          <div :class="[e('panel-range')]">
            <div :class="['panel-range-left']">
              <v-time-panel
                v-if="showTime"
                :visible="panelVisible('time')"
                :date="date1 || currentDate1"
                :disabled-time="disabledTime"
                @update:date="onTimeUpdate"></v-time-panel>
              <v-date-panel
                v-show="panelVisible('date')"
                v-model="currentDate1"
                :selected-date="date1"
                :range-date1="date1"
                :range-date2="date2"
                :max-current-date="maxCurrentDate"
                :hover-date.sync="hoverDate"
                :disabled-date="disabledDate"
                @select="onSelectDate"
                @switch-to="onSwitchPanel"></v-date-panel>
              <v-month-panel
                v-show="panelVisible('month')"
                v-model="currentDate1"
                :selected-date="date1"
                :max-current-date="maxCurrentDate"
                @select="onSelectMonth"
                @switch-to="onSwitchPanel"></v-month-panel>
              <v-year-panel
                v-show="panelVisible('year')"
                v-model="currentDate1"
                :selected-date="date1"
                :max-current-date="maxCurrentDate"
                @select="onSelectYear"
                @switch-to="onSwitchPanel"></v-year-panel>
              <v-decade-panel
                v-show="panelVisible('decade')"
                v-model="currentDate1"
                :selected-date="date1"
                :max-current-date="maxCurrentDate"
                @select="onSelectDecade"></v-decade-panel>
            </div>
            <div :class="['panel-range-right']">
              <v-time-panel
                v-if="showTime"
                :visible="panelVisible('time', false)"
                :date="date2 || currentDate2"
                :disabled-time="disabledTime"
                @update:date="date => onTimeUpdate(date, false)"></v-time-panel>
              <v-date-panel
                v-show="panelVisible('date', false)"
                v-model="currentDate2"
                :selected-date="date2"
                :range-date1="date1"
                :range-date2="date2"
                :min-current-date="minCurrentDate"
                :hover-date.sync="hoverDate"
                :disabled-date="disabledDate"
                @select="(date) => onSelectDate(date, false)"
                @switch-to="(panel) => onSwitchPanel(panel, false)"></v-date-panel>
              <v-month-panel
                v-show="panelVisible('month', false)"
                v-model="currentDate2"
                :selected-date="date2"
                :min-current-date="minCurrentDate"
                @select="(date) => onSelectMonth(date, false)"
                @switch-to="(panel) => onSwitchPanel(panel, false)"></v-month-panel>
              <v-year-panel
                v-show="panelVisible('year', false)"
                v-model="currentDate2"
                :selected-date="date2"
                :min-current-date="minCurrentDate"
                @select="date => onSelectYear(date, false)"
                @switch-to="panel => onSwitchPanel(panel, false)"></v-year-panel>
              <v-decade-panel
                v-show="panelVisible('decade', false)"
                v-model="currentDate2"
                :selected-date="date2"
                :min-current-date="minCurrentDate"
                @select="date => onSelectDecade(date, false)"></v-decade-panel>
            </div>
          </div>
        </div>
        <div :class="[e('footer')]">
          <div :class="[e('footer-btn'), showTimeCls]">
             <template v-if="showTime">
              <a @click="onSelectDateTime">{{selectDateTimeText}}</a>
              <a @click="onOKSelect">{{okText}}</a>
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
import RangePicker from './mixins/RangePicker'
import VTimePanel from './widgets/VTimePanel.vue'
import VDatePanel from './widgets/VDatePanel.vue'
import VMonthPanel from './widgets/VMonthPanel.vue'
import VYearPanel from './widgets/VYearPanel.vue'
import VDecadePanel from './widgets/VDecadePanel.vue'
import { PickerPanelType } from './type'
import { VInput, VInputGroup } from '../../components'
import { addMonth, isSameMonth } from '../../utils'

@Component({
  components: {
  VTimePanel,
  VDatePanel,
  VMonthPanel,
  VYearPanel,
  VDecadePanel,
  VInput,
  VInputGroup
  },
  name: 'v-range-picker'
  })
export default class VRangePicker extends mixins(Themeable, Bemable, RangePicker) {
  @Prop({ type: String, default: 'YYYY/MM/DD' }) format!: string

  @Prop(String) startPlaceholder!: string

  @Prop(String) endPlaceholder!: string

  currentDate1: Date = this.date1 || new Date()

  currentDate2: Date = this.date2 || new Date()

  currentPanel1: PickerPanelType = 'date'

  currentPanel2: PickerPanelType = 'date'

  hoverDate: Date| null = null

  // overwrite DateHelper
  get actucalFormat () {
    if (this.showTime) return 'YYYY/MM/DD HH:mm:ss'
    return 'YYYY/MM/DD'
  }

  get maxCurrentDate () {
    if (!this.currentDate2) return null
    let date = new Date(this.currentDate2.getFullYear(), this.currentDate2.getMonth(), 0)
    return date
  }

  get minCurrentDate () {
    if (!this.currentDate1) return null
    let date = new Date(this.currentDate1.getFullYear(), this.currentDate1.getMonth() + 1, 1)
    return date
  }

  get selectDateTimeText () {
    return this.currentPanel1 === 'time' ? this.t('selectDate') : this.t('selectTime')
  }

  get okText () {
    return this.t('ok')
  }

  get showTimeCls () {
    return this.showTime ? 'is-show-time' : ''
  }

  onTimeUpdate (date: Date, left: boolean = true) {
    if (left) this.model1 = this.formatDate(date)
    else this.model2 = this.formatDate(date)
  }

  onOKSelect () {
    this.trySyncModel()
    this.visible = false
  }

  onSelectDate (date: Date, left: boolean = true) {
    // this behavior don't make sense
    // let d = date
    // let originDate = left ? this.date1 : this.date2
    // if (this.showTime && originDate) {
    //   d = new Date(date)
    //   d.setHours(originDate.getHours())
    //   d.setMinutes(originDate.getMinutes())
    //   d.setSeconds(originDate.getSeconds())
    // }
    if (left) this.model1 = this.formatDate(date)
    else this.model2 = this.formatDate(date)
  }

  onSelectMonth (date: Date, left: boolean = true) {
    if (left) {
      this.currentPanel1 = 'date'
      this.currentDate1 = date
    } else {
      this.currentPanel2 = 'date'
      this.currentDate2 = date
    }
  }

  onSelectYear (date: Date, left: boolean = true) {
    if (left) {
      this.currentPanel1 = 'month'
      this.currentDate1 = date
    } else {
      this.currentPanel2 = 'month'
      this.currentDate2 = date
    }
  }

  onSelectDecade (date: Date, left: boolean = true) {
    if (left) {
      this.currentPanel1 = 'year'
      this.currentDate1 = date
    } else {
      this.currentPanel2 = 'year'
      this.currentDate2 = date
    }
  }

  onSelectDateTime () {
    let isTime = this.currentPanel1 === 'time'
    this.currentPanel1 = isTime ? 'date' : 'time'
    this.currentPanel2 = isTime ? 'date' : 'time'
    this.timeSelecting = !isTime
  }

  onSwitchPanel (panel: PickerPanelType, left: boolean = true) {
    if (left) this.currentPanel1 = panel
    else this.currentPanel2 = panel
  }

  onClear () {
    this.model = ['', '']
  }

  panelVisible (panel: PickerPanelType, left: boolean = true) {
    if (left) return panel === this.currentPanel1
    else return panel === this.currentPanel2
  }

  updateCurrentDate (index?: 1 | 2) {
    this.currentDate1 = new Date(this.date1 || new Date())
    let d2 = new Date(this.date2 || addMonth(this.currentDate1, 1))
    if (isSameMonth(d2, this.currentDate1) || d2.getTime() < this.currentDate1.getTime()) {
      d2 = addMonth(d2, 1)
    }
    this.currentDate2 = d2
  }

  @Watch('date1') date1Change (date: Date) {
    this.updateCurrentDate()
  }

  @Watch('date2') date2Change (date: Date) {
    this.updateCurrentDate()
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (!visible) {
      setTimeout(() => {
        this.currentPanel1 = 'date'
        this.currentPanel2 = 'date'
      }, 300)
    } else {
      this.updateCurrentDate()
    }
  }

  mounted () {
    this.updateCurrentDate()
  }
}
</script>

<style src="./style/v-range-picker.scss" lang="scss"></style>
