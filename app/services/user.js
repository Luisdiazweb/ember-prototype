import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
  @tracked user = null;
  @tracked errorMessages = [];

  verifyUser() {
    if (this.user && this.getCookie()) {
      return true;
    }

    if (!this.getCookie() && this.user) {
      this.createCookie();
      return true;
    }

    if (!this.user && this.getCookie()) {
      this.user = JSON.parse(this.getCookie());
      return true;
    }

    return false;
  }

  authUser(email, password) {
    /* Only for testing */
    const emailTest = 'testing@email.com';
    const passwordTest = 'testing123123';

    this.errorMessages = [];

    /* Remove this section for auth endpoint validation */
    if (email == emailTest && password == passwordTest) {
      this.user = {
        id: 4,
        email: email,
        password: password,
        phone: '+1 430 7585308',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae illo deleniti qui, esse eos laborum quisquam eum obcaecati.',
        name: 'Luis',
        lastname: 'Madrid',
      };
      return true;
    } else {
      this.errorMessages = ['Wrong credentials! try again.'];
      console.log(this.errorMessages);
      return false;
    }
  }

  logoutUser() {
    this.user = null;
    this.deleteCookie();
  }

  createCookie(days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie =
      'user=' + (JSON.stringify(this.user) || '') + expires + '; path=/';
  }

  getCookie() {
    var nameEQ = 'user=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  deleteCookie() {
    document.cookie = 'user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
