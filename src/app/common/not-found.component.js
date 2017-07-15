import { WFMComponent } from '../../framework/index';

class NotFound extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const notFound = new NotFound({
  selector: 'app-not-found',
  template: `
    <div style="display: flex; align-items: center; justify-content: center">
        <div>
            <h2 class="red darken-1">Страница не найдена</h2>
            <a href="#">Перейти на главную</a>   
        </div>    
    </div>
  `
})