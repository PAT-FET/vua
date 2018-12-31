<template>
<div :class="[b()]">
    <transition-group name="move-up-transition" tag="ul" :class="[e('list')]">
      <li :class="[e('item')]" v-for="(item) in messageList" :key="item.message">
          <i class="anticon mr-2" :class="[`anticon-${iconName(item.type)}`, spin(item.type), `text-${item.type}`]"></i>
          <span>{{item.message}}</span>
      </li>
    </transition-group>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { MessageOption, MessageConfigOption } from './type'
import { statusIconMap } from '../../utils'

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
