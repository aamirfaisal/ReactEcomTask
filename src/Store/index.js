import { legacy_createStore as createStore, applyMiddleware } from "redux";
import RootReducer from "../Redux/Reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const PersistConfig = {
  key: "main-root",
  storage,
};

const PersistedReducer = persistReducer(PersistConfig, RootReducer);

const Store = createStore(PersistedReducer, applyMiddleware());

const Presistor = persistStore(Store);

export { Presistor };
export default Store;
