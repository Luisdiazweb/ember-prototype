import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class HomeController extends Controller {
  @service('theme') themeService;
}
