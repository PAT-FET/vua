<template>
<div>
    <div class="my-4">
        <p class="title">块</p>
        <div class="d-flex">
                <div class="border-right" style="width: 50%;">
                    <pre>
                        @include b(v-button){
                            color: #fff;
                        }
                    </pre>
                </div>
                <div>
                    <pre>
                        .v-button {
                            color: #fff;
                        }
                    </pre>
                </div>
        </div>
    </div>

    <div class="my-4">
        <p class="title">元素</p>
        <div class="d-flex">
                <div class="border-right" style="width: 50%;">
                    <pre>
                        @include b(v-button){
                            color: #fff;
                            @include e(text){
                                color: #000;
                            }
                        }
                    </pre>
                </div>
                <div>
                    <pre>
                        .v-button {
                            color: #fff;
                        }
                        .v-button__text {
                            color: #000;
                        }
                    </pre>
                </div>
        </div>
    </div>

    <div class="my-4">
        <p class="title">修饰符</p>
        <div class="d-flex">
                <div class="border-right" style="width: 50%;">
                    <pre>
                        @include b(v-button){
                            @include m(dark){
                                color: black;
                                @include e(text){
                                    color: white;
                                }
                            }
                            @include e(text){
                                color: #000;
                                @include m(primary){
                                    color: red;
                                }
                            }
                        }
                    </pre>
                </div>
                <div>
                    <pre>
                        .v-button--dark {
                            color: black;
                        }
                        .v-button--dark .v-button__text {
                            color: white;
                        }

                        .v-button__text {
                            color: #000;
                        }
                        .v-button__text--primary {
                            color: red;
                        }
                    </pre>
                </div>
        </div>
    </div>

    <div class="my-4">
        <p class="title">组合</p>
        <div class="d-flex">
                <div class="border-right" style="width: 50%;">
                    <pre>
                        @include b(v-button){
                            @include m(dark){
                                &.active{
                                color: #fff;
                                }
                            }

                            @include m(dark, lg){
                                &.hover{
                                color: black;
                                }
                            }

                            @include e(text){
                                @include m(lg, sm){
                                    &.active{
                                        color: #000;
                                    }
                                }
                            }
                        }

                    </pre>
                </div>
                <div>
                    <pre>
                        .v-button--dark.active {
                            color: #fff;
                        }

                        .v-button--dark.v-button--lg.hover {
                            color: black;
                        }

                        .v-button__text--lg.v-button__text--sm.active {
                            color: #000;
                        }
                    </pre>
                </div>
        </div>
    </div>

<div class="my-4">
        <p class="title">嵌套</p>
        <div class="d-flex">
                <div class="border-right" style="width: 50%;">
                    <pre>
                        @include b(v-button){
                            &>{
                                @include e(text, true){
                                color: #fff;
                                }
                            }

                            @include b(menu){
                                color: black;
                                @include e(item, true){
                                    color: #fff;
                                    @include m(dark){
                                        color: #fff;
                                    }
                                }
                            }

                            @include e(addon){
                                color: green;
                            }
                        }

                    </pre>
                </div>
                <div>
                    <pre>
                        .v-button > .v-button__text {
                            color: #fff;
                        }

                        .v-button .menu {
                            color: black;
                        }
                        .v-button .menu .menu__item {
                            color: #fff;
                        }
                        .v-button .menu .menu__item--dark {
                            color: #fff;
                        }

                        .v-button__addon {
                            color: green;
                        }
                    </pre>
                </div>
        </div>
    </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc 针对组件的各种使用情况示例
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
