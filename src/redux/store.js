import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
// it allows our browser to actually cache our store depending on the configuration bellow ( line 13 )

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
