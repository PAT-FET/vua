import Vue from 'vue'

interface Page {
    name: string
    path?: string
    children?: Page[]
    component?: Vue
}

const pages: Page[] = []

const routes: any [] = []

const req = (require as any).context('../views/pages', true, /Page\.vue$/)
const requireAll = (requireContext: any) => requireContext.keys().map((key: string) => {
  let path = key.split('/')
  let compName = path[path.length - 1].replace('.vue', '')
  path = path.slice(1, path.length - 2)
  let context = pages
  path.forEach((v, i) => {
    let item = context.find(w => w.name === v)
    if (!item) {
      item = {
        name: v,
        children: []
      }
      context.push(item)
    }
    if (i === path.length - 1) {
      context.push({
        name: compName.replace('Page', ''),
        path: key.replace('.vue', '').replace('.', '').replace('Page', ''),
        component: requireContext(key).default
      })
      routes.push({
        path: key.replace('.vue', '').replace('.', '').replace('Page', ''),
        component: requireContext(key).default
      })
    } else {
      context = item.children || []
    }
  })

  // if (key.split('/').length !== 3) return
  // let name = 'd-' + key.split('/')[1]
  // const component = requireContext(key).default as Vue
  // pages[name] = component
})
requireAll(req)

export { routes }
export default pages
