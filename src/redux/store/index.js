import { compose, createStore } from "redux";

import reducers from "../reducers";

function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, preloadedState, composeEnhancers());

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();

export default store;
