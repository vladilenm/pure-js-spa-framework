import { Module as WFMModule } from './core/module'
import { Component as WFMComponent } from './core/component/component'
import { Directive as WFMDirective } from './core/directives/directive'
import { Pipe as WFMPipe } from './core/pipes/pipe'
import { bootstrap } from './core/functions/bootstrap'
import { _ } from './tools/util'
import { $ } from './tools/dom'
import { http } from './tools/http'
import { EventEmitter } from './tools/event-emitter'
import { router } from './core/routing/router'

export {
  WFMModule,
  WFMComponent,
  WFMDirective,
  WFMPipe,
  EventEmitter,
  bootstrap,
  _,
  $,
  http,
  router
}