import en from '../locale/en'
import { getObjectValueByPath } from './helpers'
import { VuaLocale, VuaLanguage } from '@/vua'
import { logError, logWarn } from './log'

const fallback = Symbol('Lang fallback')

function getTranslation (locale: VuaLocale, key: string, usingFallback = false): string {
  let translation = getObjectValueByPath(locale, key, fallback) as string | typeof fallback

  if (translation === fallback) {
    if (usingFallback) {
      logError(`Translation key "${key}" not found in fallback`)
      translation = key
    } else {
      logWarn(`Translation key "${key}" not found, falling back to default`)
      translation = getTranslation(en, key, true)
    }
  }

  return translation
}

export default function genLang (lang: Partial<VuaLanguage> = {}): VuaLanguage {
  return {
    locales: Object.assign({ en }, lang.locales),
    current: lang.current || 'en',
    t (key, ...params) {
      if (lang.t) return lang.t(key, ...params)

      const translation = getTranslation(this.locales[this.current], key)

      return translation.replace(/\{(\d+)\}/g, (match: string, index: string) => {
        return String(params[+index])
      })
    }
  }
}
