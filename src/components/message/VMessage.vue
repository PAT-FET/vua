<template>
<div :class="[b()]">
  <ul :class="[e('list')]">
    <transition-group name="move-up-transition">
      <li :class="[e('item')]" v-for="(item, i) in messageList" :key="i">
          <i class="anticon mr-2" :class="[`anticon-${iconName(item.type)}`, spin(item.type), `text-${item.type}`]"></i>
          <span>{{item.message}}</span>
      </li>
    </transition-group>
  </ul>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import { MessageOption, MessageConfigOption } from '@/components/message/message'
import { statusIconMap } from '@/utils/constant'

@Component({
  components: {
  },
  name: 'v-message'
  })
export default class VMessage extends mixins(Themeable, Bemable) {
  messageList: MessageOption[] = []

  config: MessageConfigOption = {
    top: 100,
    duration: 3000,
    maxCount: 3,
  }

  appendMessage (message: string, type: string = 'info', duration?: number): Promise<any> | Function {
    let option: MessageOption = {
      message,
      type,
      duration: duration !== undefined ? duration : this.config.duration
    }
    if (this.messageList.length >= this.config.maxCount) this.messageList.splice(0, 1)
    this.messageList.push(option)
    if (option.duration <= 0) {
      return () => {
        let idx = this.messageList.findIndex(v => v === option)
        if (idx >= 0) this.messageList.splice(idx, 1)
      }
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let idx = this.messageList.findIndex(v => v === option)
          if (idx >= 0) this.messageList.splice(idx, 1)
          resolve()
        }, option.duration)
      })
    }
  }

  iconName (type: string) {
    return statusIconMap[type]
  }

  spin (type: string) {
    return type === 'loading' ? 'anticon-spin' : ''
  }

  mounted () {
    document.body.appendChild(this.$el)
  }

  beforeDestroy () {
    document.body.removeChild(this.$el)
  }
}
</script>

<style lang="scss" src="./style/v-message.scss"></style>