import Vue, { VueConstructor, DirectiveOptions, Component } from 'vue'

// service
import './services/type'

export interface VuaPlugin {
    install(Vue: VueConstructor, args?: VuaOptions): void
    version: string
}

export interface VuaOptions {
    directives?: Record<string, DirectiveOptions>
    components?: Record<string, Component>
    services?: Record<string, any>
    dark?: boolean
    theme?: VuaTheme
    lang?: Partial<VuaLanguage>
}

export interface VuetifyObject extends Vue {
    dark: boolean
    theme: VuaTheme
    lang: VuaLanguage
    breakpoint: VuaBreakpoint
}

export interface VuaTheme {
    primary?: string
    secondary: string
    info?: string
    success?: string
    warning?: string
    error?: string
}

export interface VuaColorGradation {
    base: string,
    'lighten-5': string,
    'lighten-4': string,
    'lighten-3': string,
    'lighten-2': string,
    'lighten-1': string,
    'darken-1': string,
    'darken-2': string,
    'darken-3': string,
    'darken-4': string
}

export interface VuaLanguage {
    locales: Record<string, VuaLocale>
    current: string
    t(key: string, ...params: Array<string | number>): string
}

export interface VuaLocale {
    [key: string]: VuaLocale | string
}

export interface VuaBreakpoint {
    height: number
    lg: boolean
    lgAndDown: boolean
    lgAndUp: boolean
    lgOnly: boolean
    md: boolean
    mdAndDown: boolean
    mdAndUp: boolean
    mdOnly: boolean
    name: string
    sm: boolean
    smAndDown: boolean
    smAndUp: boolean
    smOnly: boolean
    width: number
    xl: boolean
    xlOnly: boolean
    xs: boolean
    xsOnly: boolean
}

export interface VuaBreakpointType {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

declare module 'vue/types/vue' {
    interface Vue {
        $vua: VuetifyObject
    }
}
