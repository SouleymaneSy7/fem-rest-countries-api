import React from "react";
import RouterConfig from "./routes/route";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <RouterConfig />
    </React.Fragment>
  );
};

export default App;
