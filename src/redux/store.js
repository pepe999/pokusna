import { createStore } from "redux";
import rootReducer from "./reducers/index";

//  pro rozsireni do chrome - redux devtools
import { devToolsEnhancer } from "redux-devtools-extension";

// kvuli redux devtools - jinak by stačilo const store = createStore(rootReducer);
const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
    // Specify custom devTools options
  ));


export default store;
