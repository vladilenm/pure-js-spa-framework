import { renderComponent } from './render-component'
import { _ } from '../../tools/util'

export function initComponents(bootstrap, components) {
  if (_.isUndefined(bootstrap)) {
    throw new Error(`Bootstrap component in not defined`)
  }

  [bootstrap, ...components].forEach(renderComponent)
}