export type PickerSize = 'sm' | 'md' | 'lg'
export type PickerPanelType = 'time' | 'date' | 'month' | 'year' | 'decade'
export type PickerDisabledDateFunc = (date: Date) => boolean
export type PickerDisabledTimeFunc = (hour: number, min: number, sec: number, date: null | Date) => boolean
