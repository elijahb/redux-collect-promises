# redux-collect-promises
Collect redux promises and wait for resolution for server side rendering

## Why?
When doing react server side rendering, you need to wait for your data before
rendering. If you happen to make API calls (using redux-thunk for example),
you need to wait for those calls to return before rendering.

This middleware will collect any promise returned from the actions, and call
the method sent when all promises are resolved.

## Usage

```
import { renderToString } from 'react-dom/server';
import { createStore, compose, applyMiddleware } from 'redux';
import watchPromises from 'redux-watch-promises';

const render = () => {
  const content = renderToString(router);
  const state = store.getState();
  response.send(index
    .replace('<!-- CONTENT -->', content)
    .replace('<!-- STATE -->', JSON.stringify(state).replace(/</g, '\\u003c')));
};
const store = compose(applyMiddleware(watch(render), thunk))(createStore)(reducers);

```
