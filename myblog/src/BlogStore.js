import {ReduceStore} from 'flux/utils';
import dispatcher from './BlogDispatcher';
import {Map} from "immutable";

class BlogStore extends ReduceStore {

  getInitialState() {
    return Map({
      articles: [],
      draft: Map({
        title: "",
        body: "",
        image: "",
        author: Map({
          username: "",
          password: ""
        })
      })
    });
  }

  reduce(state, action) {
    if (action.type === 'blog-articals') {
      return state.set('articles', action.value);
    }
    return state;
  }

}

export default new BlogStore(dispatcher);