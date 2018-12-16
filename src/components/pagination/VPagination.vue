<template>
<ul :class="[b(), sizeCls]">
  <li :class="[e('total')]" v-if="showTotal">{{totalText}}</li>
  <li :class="[e('options')]" v-if="showSizeChanger">
    <v-select v-model="pageSizeModel" :size="size">
      <v-option :value="size" :label="sizePerPageText(size)" v-for="size in pageSizeOptions" :key="size"></v-option>
    </v-select>
  </li>
  <li :class="[e('prev'), prevDisabledCls]" tabindex="0" @click="goPrevPage"><i class="anticon anticon-left"></i></li>
  <li :class="[e('item'), activePageCls(firstPage)]" tabindex="0" v-if="firstPage" @click="jumpTo(firstPage)">{{firstPage}}</li>
  <li :class="[e('jump-prev')]" tabindex="0" v-if="showBackwardStep" @click="goLastStepPage">
    <i class="anticon anticon-double-left"></i>
    <span>•••</span>
  </li>
  <li :class="[e('item'), activePageCls(page)]" tabindex="0" v-for="page in restPages" :key="page" @click="jumpTo(page)">{{page}}</li>
  <li :class="[e('jump-next')]" tabindex="0" v-if="showForwardStep" @click="goNextStepPage">
    <i class="anticon anticon-double-right"></i>
    <span>•••</span>
  </li>
  <li :class="[e('item'), activePageCls(lastPage)]" tabindex="0" v-if="lastPage" @click="jumpTo(lastPage)">{{lastPage}}</li>
  <li :class="[e('next'), nextDisabledCls]" tabindex="0" @click="goNextPage"><i class="anticon anticon-right"></i></li>
  <li :class="[e('jumper')]" v-if="showJumper">
    {{gotoText}}<v-input :class="[e('jumper-input')]" :value="jumperPage" :size="size" @change="onJumper"></v-input>
  </li>
</ul>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { PaginationSize } from './pagination'
import { VSelect, VOption } from '../select'
import { VInput } from '../input'
import { range } from '@/utils/lang'
import Localeable from '@/mixins/Localeable'

@Component({
  components: {
  VSelect,
  VOption,
  VInput
  },
  name: 'v-pagination'
  })
export default class VPagination extends mixins(Themeable, Bemable, Localeable) {
  @Prop(Number) currentPage!: number

  @Prop(Number) pageSize!: number

  @Prop({type: String, default: 'md'}) size!: PaginationSize

  @Prop({type: Number, default: 0}) total!: number

  @Prop({type: Array, default: () => [10, 20, 30, 40, 50]}) pageSizeOptions!: number[]

  @Prop(Boolean) showTotal!: boolean

  @Prop(Boolean) showSizeChanger!: boolean

  @Prop(Boolean) showJumper!: boolean

  step: number = 5

  localPageSize: number = 10

  localCurrentPage: number = 1

  jumperPage: string = ''

  @Emit('update:currentPage') currentPageUpdate (currentPage: number) {
    this.currentChange(currentPage)
  }

  @Emit('update:pageSize') pageSizeUpdate (pageSize: number) {
    this.sizeChange(pageSize)
  }

  @Emit() sizeChange (pageSize: number) {}

  @Emit() currentChange (currentPage: number) {}

  get currentPageModel (): number {
    return this.currentPage || this.localCurrentPage
  }

  set currentPageModel (currentPage: number) {
    this.localCurrentPage = currentPage
    this.currentPageUpdate(currentPage)
  }

  get pageSizeModel (): number {
    return this.pageSize || this.localPageSize
  }

  set pageSizeModel (pageSize: number) {
    this.localPageSize = pageSize
    this.pageSizeUpdate(pageSize)
  }

  get maxPage () {
    return Math.ceil(this.total / this.pageSizeModel)
  }

  get firstPage (): number {
    return this.total > 0 ? 1 : 0
  }

  get lastPage (): number {
    let max = this.maxPage
    return max > 1 ? max : 0
  }

  get restPages (): number[] {
    let max = this.maxPage
    if (max <= 2) return []
    let ret: number[] = []
    let current = this.currentPageModel
    let interval = Math.floor(this.step / 2)
    if (max < this.step * 2) {
      ret.push(...range(2, max-1))
    } else {
      let startInterval = current <= max - interval ? interval : current - max + 2 * interval
      let endInterval = current >= 1 + interval ? interval : 1 - current + 2 * interval
      let start = current - startInterval < 2 ? 2 : current - startInterval
      let end = endInterval + current > max - 1 ? max - 1 : endInterval + current
      if (current - 1 >= start) {
        ret.push(...range(start, current - 1))
      }
      if (current !== 1 && current !== max) ret.push(current)
      if (current <= end) {
        ret.push(...range(current + 1, end))
      }
    }
    return ret
  }

  get showBackwardStep () {
    return this.restPages[0] && this.restPages[0] > 2
  }

  get showForwardStep () {
    let last = this.restPages[this.restPages.length - 1]
    let max = this.maxPage
    return last && max > 2 && last < max - 1
  }

  get prevDisabled () {
    return this.currentPageModel <= 1
  }

  get nextDisabled () {
    let max = this.maxPage
    return this.currentPageModel >= max
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get totalText () {
    return this.t('pagination.totalText', this.total)
  }

  get gotoText () {
    return this.t('pagination.goto')
  }

  sizePerPageText (size: number) {
    return size + '/' + this.t('pagination.page')
  }

  jumpTo (page: number) {
    let max = this.maxPage
    page = page < 1 ? 1 : page > max ? max : page
    this.currentPageModel = page
  }

  goPrevPage () {
    if (!this.prevDisabled) this.jumpTo(this.currentPageModel - 1)
  }

  goNextPage () {
    if (!this.nextDisabled) this.jumpTo(this.currentPageModel + 1)
  }

  goLastStepPage () {
    this.jumpTo(this.currentPageModel - this.step)
  }

  goNextStepPage () {
    this.jumpTo(this.currentPageModel + this.step)
  }

  activePageCls (page: number) {
    return page === this.currentPageModel ? 'active' : ''
  }

  get prevDisabledCls () {
    return this.prevDisabled ? 'disabled' : ''
  }

  get nextDisabledCls () {
    return this.nextDisabled ? 'disabled' : ''
  }

  onJumper (page: string) {
    if (!page || isNaN(page as any)) return
    this.jumpTo(+page)
    this.jumperPage = ''
  }
}
</script>

<style src="./style/v-pagination.scss" lang="scss"></style>
