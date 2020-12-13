import { useState } from "react";
import { HomeLayout } from "./components";
import { AppContext } from "./App.context";

function App() {
  const [state, dispatch] = useState({
    sideBarOpen: true,
    trainingMode: true,
    filter: {
      crypto: true,
      commodities: false,
      stock: true,
      index: false,
      currencies: false,
    },
  });
  return (
    <AppContext.Provider value={{ state, setState: dispatch }}>
      <HomeLayout>
        <div>Hello world!</div>
      </HomeLayout>
    </AppContext.Provider>
  );
}

export default App;
