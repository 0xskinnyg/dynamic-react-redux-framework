import React from "react";
import { Provider } from "react-redux";
import store from "./services/store";
import ViewPanel from "./components/ViewPanel";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ViewPanel />
    </Provider>
  );
};

export default App;
