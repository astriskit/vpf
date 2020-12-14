import { useState } from "react";
import { HomeLayout } from "./components";
import { AppContext } from "./App.context";
import { AppState } from "./AppState.type";

function App() {
  const [state, setState] = useState<AppState>({
    sideBarOpen: true,
    trainingMode: true,
    filter: {
      crypto: true,
      commodities: false,
      stock: true,
      index: false,
      currencies: false,
    },
    openTrades: {
      inProgress: 15,
      closestOutcome: {
        period: 25 * 60 + 40,
        assetTitle: "ETH 48 hour",
      },
    },
    tradingHistory: {
      day: {
        trades: 2,
        profitPercent: "+2.5%",
      },
      week: {
        trades: 42,
        profitPercent: "+14.5%",
      },
      month: {
        trades: 142,
        profitPercent: "+25.5%",
      },
      all: {
        trades: 542,
        profitPercent: "+30.5%",
      },
      selected: "week",
    },
    trainingWallet: {
      currency: "$",
      trading: 34752,
      holding: 4102,
    },
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      <HomeLayout>
        {/* {
          Card content and filters : to-be-contd...
        } */}
      </HomeLayout>
    </AppContext.Provider>
  );
}

export default App;
