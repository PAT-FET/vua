<template>
<div :class="[b()]">
  <div :class="[e('container'), m(placement, 'container')]" v-for="placement in placements" :key="placement">
      <transition-group :class="[e('list'), m(placement, 'list')]" tag="ul" :name="getPlacementTransition(placement)">
        <li :class="[e('item')]" v-for="(item, i) in getPlacementList(placement)" :key="i" @mouseover="onMouseOver(item)" @mouseout="onMouseOut(item)">
            <div :class="[e('icon')]" v-if="item.type">
                <i class="anticon" :class="[`anticon-${iconName(item.type)}`, `text-${item.type}`]"></i>
            </div>
            <div :class="[e('content')]">
              <div :class="[e('title')]" v-if="item.title">{{item.title}}</div>
              <div :class="[e('body')]">{{item.message}}</div>
            </div>
            <div :class="[e('close')]" @click="close(item)"><i class="anticon anticon-close"></i></div>
        </li>
      </transition-group>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import { statusIconMap } from '@/utils/constant'
import { NotificationOption, NotificationConfigOption, NotificationPlacement, NotificationItem } from './notification'

let index = 1

@Component({
  components: {
  },
  name: 'v-notification'
  })
export default class VNotification extends mixins(Themeable, Bemable) {
  notificationList: NotificationOption[] = []

  config: NotificationConfigOption = {
    duration: 5000,
    maxCount: 10,
    placement: 'top-right'
  }

  placements: string[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

  get topRightList (): NotificationOption[] {
    return this.notificationList.filter(v => v.placement === 'top-right')
  }

  get topLeftList (): NotificationOption[] {
    return this.notificationList.filter(v => v.placement === 'top-left')
  }

  get bottomRightList (): NotificationOption[] {
    return this.notificationList.filter(v => v.placement === 'bottom-right')
  }

  get bottomLeftList (): NotificationOption[] {
    return this.notificationList.filter(v => v.placement === 'bottom-left')
  }

  getPlacementList (placement: NotificationPlacement) {
    if (placement === 'top-left') return this.topLeftList
    if (placement === 'bottom-left') return this.bottomLeftList
    if (placement === 'bottom-right') return this.bottomRightList
    return this.topRightList
  }

  getPlacementTransition (placement: NotificationPlacement) {
    if (placement === 'top-left' || placement === 'bottom-left') return 'move-left-transition'
    return 'move-right-transition'
  }

  appendNotification (title: string, message: string, type: string, key: string, duration?: number, placement?: NotificationPlacement): Promise<any> | Function {
    let option: NotificationItem = {
      title: title,
      key: key || ((index++) + ''),
      message,
      type,
      duration: duration !== undefined ? duration : this.config.duration,
      placement: placement || this.config.placement,
      close: () => {},
      timer: null
    }
    if (this.notificationList.length >= this.config.maxCount) this.notificationList.splice(0, 1)
    let idx = this.notificationList.findIndex(v => v.key === key)
    if (idx >= 0) {
      this.notificationList.splice(idx, 1, option)
    } else {
      this.notificationList.push(option)
    }
    if (option.duration <= 0) {
      return option.close
    } else {
      return new Promise((resolve, reject) => {
        option.close = () => {
          let idx = this.notificationList.findIndex(v => v === option)
          if (idx >= 0) this.notificationList.splice(idx, 1)
          resolve()
        }
        option.timer = setTimeout(() => {
          option.close()
        }, option.duration)
      })
    }
  }

  close (item: NotificationOption) {
    let idx = this.notificationList.findIndex(v => v === item)
    if (idx >= 0) this.notificationList.splice(idx, 1)
  }

  iconName (type: string) {
    return statusIconMap[type]
  }

  onMouseOver (item: NotificationItem) {
    if (!item.duration) return
    if (item.timer) {
      clearTimeout(item.timer)
      item.timer = null
    }
  }

  onMouseOut (item: NotificationItem) {
    if (!item.duration) return
    if (item.timer) {
      clearTimeout(item.timer)
      item.timer = null
    }
    item.timer = setTimeout(item.close, item.duration)
  }

  mounted () {
    document.body.appendChild(this.$el)
  }

  beforeDestroy () {
    document.body.removeChild(this.$el)
  }
}
</script>

<style lang="scss" src="./style/v-notification.scss"></style>
