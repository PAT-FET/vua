响应式断点体系： 分为 `xl(0)` `sm(600)` `md(960)` `lg(1280 - 16)` `xl(1920 - 16)` \
    JS: `this.$vua.breakpoint`  \
    CSS(scss mixins): \
        `breakpoint-up($name, $breakpoints: $grid-breakpoints)`  \
        `breakpoint-down($name, $breakpoints: $grid-breakpoints)` \
        `breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints)` \
        `breakpoint-only($name, $breakpoints: $grid-breakpoints)`
