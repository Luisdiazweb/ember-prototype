import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ThemeService extends Service {
  @tracked currentTheme = 'lightOriginal';

  @action
  setDarkTheme() {
    this.currentTheme = 'darkOriginal';
  }

  @action
  setLightTheme() {
    this.currentTheme = 'lightOriginal';
  }
}
