import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"

import reducer from "redux/action/reducer";
// import reducer2 from "redux/action/reducer";

const store: Store<ThemeState, ThemeAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

// const rootReducer = combineReducers({
//     system: systemReducer,
//     chat: chatReducer
// })

export default store;
// export type RootState = ReturnType<typeof rootReducer>