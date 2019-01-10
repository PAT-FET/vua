export type ButtonType = 'dashed' | 'primary' | 'solid' | 'text'

export type ButtonSize = 'lg' | 'sm' | 'md'

export type ButtonShape = 'round' | 'circle'

export interface ButtonCssVariable {
    btnBgColor?: string
    btnBgActiveColor?: string
    btnBgFocusColor?: string
    btnTextColor?: string
    btnTextActiveColor?: string
    btnTextFocusColor?: string
    btnBorderColor?: string
    btnBorderActiveColor?: string
    btnBorderFocusColor?: string
}
