import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { UsersReducer, SerchReducer, SidReducer } from "../users/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      serches: SerchReducer,
      sakuhin: SidReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
}
