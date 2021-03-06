import { WFMComponent, router, http, _ } from 'framework'

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config)

    this.data = {
      title: 'Loading....',
      linkTitle: 'Перейти на другую страницу'
    }
  }

  events() {
    return {
      'click .js-link': 'goToTabs'
    }
  }

  goToTabs(event) {
    event.preventDefault()
    router.navigate('tabs')
  }

  afterInit() {
    http.get('http://localhost:3000/title').then(title => {
      _.delay(2000).then(() => {
        this.data.title = title.appName
        this.render()
      })
    })
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: `
    <div class="row">
      <div class="col s6 offset-s3 home__block">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ title }}</span>
            <p>Пока тут нет никакого функционала!</p>
          </div>
          <div class="card-action">
            <a href="#not-existing-path" class="js-link">{{linkTitle}}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .home__block { margin-top: 40px; }
  `
})