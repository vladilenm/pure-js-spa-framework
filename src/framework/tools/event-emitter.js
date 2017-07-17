import { _ } from './util'

export class EventEmitter {
  constructor() {
    this.listeners = {}
  }

  on(eventName, func) {
    if (_.isUndefined(this.listeners[eventName])) this.listeners[eventName] = []

    this.listeners[eventName].push(func)
  }

  emit(eventName, data) {
    if (_.isUndefined(this.listeners[eventName])) return

    this.listeners[eventName].forEach(f => f(data))
  }
}