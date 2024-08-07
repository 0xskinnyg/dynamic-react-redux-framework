import React from "react";
import { Provider } from "react-redux";
import store from "./services/store";
import ViewPanel from "./components/ViewPanel";
import "rsuite/dist/rsuite.min.css";
import { Container, Content, CustomProvider } from "rsuite";

const App: React.FC = () => {
  return (
    <CustomProvider theme="dark">
      <Provider store={store}>
        <Container>
          <Content>
            <ViewPanel />
          </Content>
        </Container>
      </Provider>
    </CustomProvider>
  );
};

export default App;
