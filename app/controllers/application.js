import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  torii: service(),
  session: service(),
  currentUser: service(),

  actions: {
    // login() {
    //   this.get('torii').open('facebook-connect').then(() => {
    //     FB.api('/me', 'GET', { fields: 'id,name,email' }, (user) => {
    //       console.log(user);
    //     });
    //   });
    // },
    login() {
      this.session
        .authenticate('authenticator:torii', 'facebook-connect')
        .then(() => this.currentUser.load());
    },
    logout() {
      this.session.invalidate();
    }
  }
});
