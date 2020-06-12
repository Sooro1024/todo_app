import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  let store: Store;

  if (process.env.NODE_ENV === "production") {
    store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  } else {
    store = createStore(
      persistedReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        const nextRootReducer = require("./reducers").default;
        store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
      });
    }
  }

  sagaMiddleware.run(sagas);
  let persistor = persistStore(store);
  return { store, persistor };
};

const { persistor, store } = configureStore();

export { persistor, store };
