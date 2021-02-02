import { createStore, applyMiddleware, Store } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"

import reducer from "redux/action/reducer";

// const rootReducer = combineReducers({
//     app: reducer,
// })

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store: Store<ThemeState, ThemeAction> & {
    dispatch: DispatchType
} = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
