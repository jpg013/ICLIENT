import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

const loginUser = (body) => {
  const loginOpts = Object.assign({}, {body}, {
    method: "POST",
    url: "/login"
  });
  return Observable.ajax(loginOpts);
}

export { loginUser }
