import tinycolor from './tinycolor.js'
import { VuaColorGradation } from '../../vua.d'

/* eslint-disable */
var hueStep = 2;
var saturationStep = 16;
var saturationStep2 = 5;
var brightnessStep1 = 5;
var brightnessStep2 = 15;
var lightColorCount = 5;
var darkColorCount = 4;

export function colorPalette (color: string, index: number) {
    var isLight = index <= 6;
    var hsv = tinycolor(color).toHsv();
    var i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
    return tinycolor({
        h: getHue(hsv, i, isLight),
        s: getSaturation(hsv, i, isLight),
        v: getValue(hsv, i, isLight),
    }).toHexString();

    function getHue (hsv: any, i: number, isLight: boolean) {
        var hue;
        if (hsv.h >= 60 && hsv.h <= 240) {
            hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
        } else {
            hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
        }
        if (hue < 0) {
            hue += 360;
        } else if (hue >= 360) {
            hue -= 360;
        }
        return Math.round(hue);
    }

    function getSaturation (hsv: any, i: number, isLight: boolean) {
        var saturation;
        if (isLight) {
            saturation = Math.round(hsv.s * 100) - saturationStep * i;
        } else if (i == darkColorCount) {
            saturation = Math.round(hsv.s * 100) + saturationStep;
        } else {
            saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
        }
        if (saturation > 100) {
            saturation = 100;
        }
        if (isLight && i === lightColorCount && saturation > 10) {
            saturation = 10;
        }
        if (saturation < 6) {
            saturation = 6;
        }
        return Math.round(saturation);
    }

    function getValue (hsv: any, i: number, isLight: boolean) {
        if (isLight) {
            return Math.round(hsv.v * 100) + brightnessStep1 * i;
        }
        return Math.round(hsv.v * 100) - brightnessStep2 * i;
    };
}

export const buildinColor = {
    blue: '#1890ff',
    purple: '#722ed1',
    cyan: '#13c2c2',
    green: '#52c41a',
    magenta: '#eb2f96',
    pink: '#eb2f96',
    red: '#f5222d',
    orange: '#fa8c16',
    yellow: '#fadb14',
    volcano: '#fa541c',
    geekblue: '#2f54eb',
    lime: '#a0d911',
    gold: '#faad14',
    grey: '#bfbfbf'
}

export const greyGradation: VuaColorGradation = {
    base: '#bfbfbf',
    'lighten-5': '#ffffff',
    'lighten-4': '#fafafa',
    'lighten-3': '#f5f5f5',
    'lighten-2': '#e8e8e8',
    'lighten-1': '#d9d9d9',
    'darken-1': '#8c8c8c',
    'darken-2': '#595959',
    'darken-3': '#262626',
    'darken-4': '#000000'
}

export function generateColorGradation(color: string): VuaColorGradation | null {
    if (color === 'grey') return Object.assign({}, greyGradation)
    let parsedColor = color

    if (!color.startsWith('#')) {
        parsedColor = (buildinColor as any)[color]
    }
    if (!parsedColor) return null
    let colorGradation = {
        base: parsedColor,
        'lighten-5': colorPalette(parsedColor, 1),
        'lighten-4': colorPalette(parsedColor, 2),
        'lighten-3': colorPalette(parsedColor, 3),
        'lighten-2': colorPalette(parsedColor, 4),
        'lighten-1': colorPalette(parsedColor, 5),
        'darken-1':  colorPalette(parsedColor, 7),
        'darken-2':  colorPalette(parsedColor, 8),
        'darken-3':  colorPalette(parsedColor, 9),
        'darken-4':  colorPalette(parsedColor, 10)
    }
    return colorGradation
}