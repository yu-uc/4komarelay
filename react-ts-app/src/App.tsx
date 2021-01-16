import React, { useReducer } from "react";
import "./App.css";
import Login from "./componet/Login";
import Home from "./componet/Home";
import Registration from "./componet/Registration";
import Return from "./componet/Return";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//ログインしていなかったらloginのパスに飛ばす処理

// type State = {
//   uid: string;
// };

// type Action = { type: string; payload: State };

// enum ActionType {
//   SINGIN = "SINGIN",
// }

// function reducer(state: State, action: { type: any; payload: any }) {
//   switch (action.type) {
//     case "SINGIN":
//       return {
//         ...state,
//         uid: action.payload,
//         // isLogin: true,
//       };
//     default:
//       return state;
//   }
// }

// export const UsersContext = React.createContext(
//   {} as {
//     state: State;
//     dispatch: React.Dispatch<Action>;
//   }
// );

// const initialState = {
//   uid: "unknown",
// };

// const UsersProvider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <UsersContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UsersContext.Provider>
//   );
// };

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/Registration" component={Registration} />
    <Route path="/Return" component={Return} />
  </Switch>
);
export default App;
