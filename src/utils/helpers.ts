import { FunctionalComponentOptions, VNode } from 'vue'

function mergeTransitions (
  transitions: undefined | Function | Function[],
  array: Function[]
) {
  if (Array.isArray(transitions)) return transitions.concat(array)
  if (transitions) array.push(transitions)
  return array
}

export function createSimpleTransition (
  name: string,
  origin = 'top center 0',
  mode?: string
): FunctionalComponentOptions {
  return {
    name,

    functional: true,

    props: {
      group: {
        type: Boolean,
        default: false
      },
      mode: {
        type: String,
        default: mode
      },
      origin: {
        type: String,
        default: origin
      }
    },

    render (h, context): VNode {
      const tag = `transition${context.props.group ? '-group' : ''}`
      context.data = context.data || {}
      context.data.props = {
        name,
        mode: context.props.mode
      }
      context.data.on = context.data.on || {}
      if (!Object.isExtensible(context.data.on)) {
        context.data.on = { ...context.data.on }
      }

      const ourBeforeEnter: Function[] = []

      ourBeforeEnter.push((el: HTMLElement) => {
        el.style.transformOrigin = context.props.origin
        el.style.webkitTransformOrigin = context.props.origin
      })

      const { beforeEnter, leave } = context.data.on

      // Type says Function | Function[] but
      // will only work if provided a function
      context.data.on.beforeEnter = () => mergeTransitions(beforeEnter, ourBeforeEnter)
      return h(tag, context.data, context.children)
    }
  }
}

export function createJavaScriptTransition (
  name: string,
  functions: Record<string, () => any>,
  mode = 'in-out'
): FunctionalComponentOptions {
  return {
    name,

    functional: true,

    props: {
      mode: {
        type: String,
        default: mode
      }
    },

    render (h, context): VNode {
      const data = {
        props: {
          ...context.props,
          name
        },
        on: functions
      }

      return h('transition', data, context.children)
    }
  }
}

export function addOnceEventListener (el: EventTarget, event: string, cb: () => void): void {
  var once = () => {
    cb()
    el.removeEventListener(event, once, false)
  }

  el.addEventListener(event, once, false)
}

export function getObjectValueByPath (obj: object, path: string, fallback?: any): any {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (!path || path.constructor !== String) return fallback
  path = path.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  path = path.replace(/^\./, '') // strip a leading dot
  return getNestedValue(obj, path.split('.'), fallback)
}

export function getNestedValue (obj: any, path: (string | number)[], fallback?: any): any {
  const last = path.length - 1

  if (last < 0) return obj === undefined ? fallback : obj

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback
    }
    obj = obj[path[i]]
  }

  if (obj == null) return fallback

  return obj[path[last]] === undefined ? fallback : obj[path[last]]
}
