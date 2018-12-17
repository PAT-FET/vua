<template>
<div>
   <div>
        <p class="title">Fade</p>
        <div class="my-3">
            <label><input type="checkbox" v-model="fadeVisible"> toggle</label>
        </div>
        <v-fade-transition>
            <div :class="$style.box" v-show="fadeVisible"></div>
        </v-fade-transition>
   </div>

    <div class="mt-4">
        <p class="title">Swing</p>
        <div class="my-3">
            <label><input type="checkbox" v-model="swingVisible"> toggle</label>
        </div>
         <v-swing-transition>
            <div :class="$style.box" v-show="swingVisible"></div>
         </v-swing-transition>
   </div>

    <div class="mt-4">
        <p class="title">Move</p>
        <div class="d-flex flex-wrap">
            <div class="mx-2" style="width: 200px">
                <p  class="subheading">down</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="moveDownVisible"> toggle</label>
                </div>
                <v-move-down-transition>
                    <div :class="$style.box" v-show="moveDownVisible"></div>
                </v-move-down-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">up</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="moveUpVisible"> toggle</label>
                </div>
                <v-move-up-transition>
                    <div :class="$style.box" v-show="moveUpVisible"></div>
                </v-move-up-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">left</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="moveLeftVisible"> toggle</label>
                </div>
                <v-move-left-transition>
                    <div :class="$style.box" v-show="moveLeftVisible"></div>
                </v-move-left-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">right</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="moveRightVisible"> toggle</label>
                </div>
                <v-move-right-transition>
                    <div :class="$style.box" v-show="moveRightVisible"></div>
                </v-move-right-transition>
            </div>
        </div>
   </div>

   <div class="mt-4">
        <p class="title">Slide</p>
        <div class="d-flex">
            <div class="mx-2" style="width: 200px">
                <p  class="subheading">down</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="slideDownVisible"> toggle</label>
                </div>
                <v-slide-down-transition>
                    <div :class="$style.box" v-show="slideDownVisible"></div>
                </v-slide-down-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">up</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="slideUpVisible"> toggle</label>
                </div>
                <v-slide-up-transition>
                    <div :class="$style.box" v-show="slideUpVisible"></div>
                </v-slide-up-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">left</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="slideLeftVisible"> toggle</label>
                </div>
                <v-slide-left-transition>
                    <div :class="$style.box" v-show="slideLeftVisible"></div>
                </v-slide-left-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">right</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="slideRightVisible"> toggle</label>
                </div>
                <v-slide-right-transition>
                    <div :class="$style.box" v-show="slideRightVisible"></div>
                </v-slide-right-transition>
            </div>
        </div>
   </div>

   <div class="mt-4">
        <p class="title">Zoom</p>
        <div class="d-flex flex-wrap">
            <div class="mx-2" style="width: 200px">
                <p  class="subheading">default</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="zoomVisible"> toggle</label>
                </div>
                <v-zoom-transition>
                    <div :class="$style.box" v-show="zoomVisible"></div>
                </v-zoom-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">big</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="zoomBigVisible"> toggle</label>
                </div>
                <v-zoom-big-transition>
                    <div :class="$style.box" v-show="zoomBigVisible"></div>
                </v-zoom-big-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">up</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="zoomUpVisible"> toggle</label>
                </div>
                <v-zoom-up-transition>
                    <div :class="$style.box" v-show="zoomUpVisible"></div>
                </v-zoom-up-transition>
            </div>

             <div class="mx-2" style="width: 200px">
                <p  class="subheading">down</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="zoomDownVisible"> toggle</label>
                </div>
                <v-zoom-down-transition>
                    <div :class="$style.box" v-show="zoomDownVisible"></div>
                </v-zoom-down-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">left</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="zoomLeftVisible"> toggle</label>
                </div>
                <v-zoom-left-transition>
                    <div :class="$style.box" v-show="zoomLeftVisible"></div>
                </v-zoom-left-transition>
            </div>

            <div class="mx-2" style="width: 200px">
                <p  class="subheading">right</p>
                <div class="my-3">
                    <label><input type="checkbox" v-model="zoomRightVisible"> toggle</label>
                </div>
                <v-zoom-right-transition>
                    <div :class="$style.box" v-show="zoomRightVisible"></div>
                </v-zoom-right-transition>
            </div>
        </div>
   </div>

   <div class="mt-4">
        <p class="title">Expand</p>
        <div class="my-3">
            <label><input type="checkbox" v-model="expandVisible"> toggle</label>
        </div>
        <v-expand-transition>
            <div class="bg-primary" v-show="expandVisible">
                <p>不能设定高度，因为使用的是vuetify的源码， 暂时不作改动</p>
                <p>不要再含有内外补的元素上应用，因为内外补没有过渡处理，会使过渡出现卡顿效果，应该用div包裹后再应用该过渡</p>
                <div style="height: 180px;"></div>
            </div>
        </v-expand-transition>
        <div :class="$style.box"></div>
   </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   内置transition
 * @desc    过渡效果演示
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  fadeVisible: boolean = true

    swingVisible: boolean = true

    moveDownVisible: boolean = true

    moveUpVisible: boolean = true

    moveLeftVisible: boolean = true

    moveRightVisible: boolean = true

    slideDownVisible: boolean = true

    slideUpVisible: boolean = true

    slideLeftVisible: boolean = true

    slideRightVisible: boolean = true

    zoomVisible: boolean = true;

    zoomBigVisible: boolean = true;

    zoomDownVisible: boolean = true

    zoomUpVisible: boolean = true

    zoomLeftVisible: boolean = true

    zoomRightVisible: boolean = true

    expandVisible: boolean = true
}
</script>

<style lang="scss" module>
@import "~@/style/mixins/breakpoint.scss";
@import "~@/style/var.scss";

.box{
    height: 120px;
    width: 160px;
    background-color: $primary-color;
}
</style>
