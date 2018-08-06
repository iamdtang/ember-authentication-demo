import Service from '@ember/service';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  session: service(),
  load() {
    let { accessToken } = this.session.data.authenticated;
    let url = `https://graph.facebook.com/v2.2/me?fields=id,name,email&access_token=${accessToken}`;

    return fetch(url)
      .then(response => response.json())
      .then(user => this.set('user', user));
  }
});
