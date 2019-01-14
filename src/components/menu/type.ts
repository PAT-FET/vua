export type MenuMode = 'vertical' | 'horizontal' | 'inline'

export interface MenuCssVariable {
    menuBgColor?: string
    menuBorderColor?: string
    // group
    menuGroupTextColor?: string
    // sub
    menuSubTitleTextColor?: string
    menuSubTitleHoverTextColor?: string
    menuSubTitleActiveTextColor?: string
    // item
    menuItemTextColor?: string
    menuItemDisabledTextColor?: string
    menuItemHoverTextColor?: string
    menuItemActiveTextColor?: string
    menuItemBgColor?: string
    menuItemActiveBgColor?: string
    menuItemActiveBorderColor?: string
}
