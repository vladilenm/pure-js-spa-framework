import { _ } from '../../tools/util'
import { $ } from '../../tools/dom'
import { router } from './router'
import { renderComponent } from '../component/render-component'

export class RoutingModule {
  constructor(routes, dispatcher) {
    this.routes = routes
    this.dispatcher = dispatcher
  }

  init() {
    window.addEventListener('hashchange', renderRoute.bind(this))
    renderRoute.call(this)
  }
}

function renderRoute() {
  let url = router.getUrl()
  let route = this.routes.find(r => r.path === url)

  if (_.isUndefined(route)) {
    route = this.routes.find(r => r.path === '**')
  }

  $('router-outlet').html(`<${route.component.selector}></${route.component.selector}>`)
  renderComponent(route.component)

  this.dispatcher.emit('routing.change-page')
}