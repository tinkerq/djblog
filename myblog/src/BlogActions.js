
import dispatcher from "./BlogDispatcher";

const actions = {
  fetchArticles: () => {
    console.log("fetching...");
    const url ="localhosl:8000/blog/artical.json";
      fetch(url).then(resp => {
        if (resp.ok) {
          return resp.json();
        }

      }).then(json => {
          dispatcher.dispatch({
          type: 'blog-articles',
          value: json

        })
      })
  }
};

export default actions;