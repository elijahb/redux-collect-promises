# redux-collect-promises
Collect redux promises and wait for resolution for server side rendering

## Why?
When doing react server side rendering, you need to wait for your data before
rendering. If you happen to make API calls (using redux-thunk for example),
you need to wait for those calls to return before rendering.

This middleware will collect any promise returned from the actions, and call
the method sent when all promises are resolved.

## Usage

```js
import { renderToString } from 'react-dom/server';
import { createStore, compose, applyMiddleware } from 'redux';
import collectPromises from 'redux-collect-promises';

express.use((req, res) => {
  const promises = [];
  const store = compose(applyMiddleware(collectPromises(promises), thunk))(createStore)(reducers);
  // First render, fires actions and collects promises
  renderToString(router);

  Promise.all(promises).then(() => {
    // Final render when promises are resolved
    const content = renderToString(router);
    const state = store.getState();
    response.send(index
      .replace('<!-- CONTENT -->', content)
      .replace('<!-- STATE -->', JSON.stringify(state).replace(/</g, '\\u003c')));
  });
});


```
