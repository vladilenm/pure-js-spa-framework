import { WFMDirective } from 'framework'

class AppHoverDirective extends WFMDirective {
  constructor(config) {
    super(config)
  }
}

export const appHoverDirective = new AppHoverDirective({
  selector: '[appHover]',
  onInit(element, color = 'blue') {

    let defaultColor = element.css().color

    element.on('mouseenter', () => {
      element.css({ color })
    })

    element.on('mouseleave', () => {
      element.css({ color: defaultColor })
    })
  }
})