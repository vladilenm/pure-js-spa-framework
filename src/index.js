import { bootstrap, _ } from 'framework'
import { appModule } from './app/app.module'

_.delay().then(() => {
  bootstrap(appModule)
})
