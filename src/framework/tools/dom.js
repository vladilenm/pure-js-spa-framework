import { _ } from './util'

class DOMManipulator {
  constructor(el) {
    if (_.isString(el)) {
      el = document.querySelector(el)
    }
    this.nativeElement = el
    this.isWFM = true
  }

  on(eventName, func, context = null) {
    func = func.bind(context)
    this.nativeElement.addEventListener(eventName, func)
    return this
  }

  off(eventName, func) {
    this.nativeElement.removeEventListener(eventName, func)
    return this
  }

  css(styles) {
    if (_.isUndefined(styles)) return this.nativeElement.style

    Object.keys(styles).forEach(key => {
      this.nativeElement.style[key] = styles[key]
    })

    return this
  }

  addClass(className) {
    this.nativeElement.classList.add(className)
    return this
  }

  removeClass(className) {
    this.nativeElement.classList.remove(className)
    return this
  }

  hasClass(className) {
    return this.nativeElement.classList.contains(className)
  }

  html(html) {
    if (html.isWFM) html = html.nativeElement.innerHTML
    this.nativeElement.innerHTML = html
    return this
  }

  append(el) {
    if (el.isWFM) el = el.nativeElement
    this.nativeElement.appendChild(el)
    return this
  }

  parent() {
    return $(this.nativeElement.parentNode)
  }

  attr(name, value = null) {
    if (_.isNull(value)) {
      return this.nativeElement.getAttribute(name)
    }

    this.nativeElement.setAttribute(name, value)
    return this
  }

  find(selector) {
    return $(this.nativeElement.querySelector(selector))
  }

  findAll(selector) {
    return Array.from(this.nativeElement.querySelectorAll(selector)).map(e => $(e))
  }
}


export function $(el) {
  return new DOMManipulator(el)
}
