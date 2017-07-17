import { WFMModule } from 'framework'
import { appComponent } from './app.component'
import { appHeader } from './shared/app.header'
import { appRoutes } from './app.routes'
import { appHoverDirective } from './shared/directives/hover.directive'
import { appMultiPipe } from './shared/pipes/multi.pipe'

class AppModule extends WFMModule {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    appHeader
  ],
  bootstrap: appComponent,
  routes: appRoutes,
  directives: [
    appHoverDirective
  ],
  pipes: [
    appMultiPipe
  ]
})