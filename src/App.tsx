import { useState } from "react";
import { AssetCard, HomeLayout } from "./components";
import { AppContext } from "./App.context";
import { AppState, Category } from "./AppState.type";
import styles from "./App.module.css";

const data = [
  {
    idx: 123,
    title: "ETH 48 hours",
    category: "crypto" as Category,
    active: true,
    counter: 0,
    tcfPercent: 34,
    tcfValue: 123223,
    tcfCurrency: "$",
    predictionTitle: "2,2x",
    predictionPeriod: 6 * (60 * 60) + 41 * 60,
    favourite: false,
  },
  {
    idx: 124,
    title: "Gold Dec 31",
    category: "commodities" as Category,
    active: true,
    counter: 2,
    tcfPercent: 24,
    tcfValue: 432111,
    tcfCurrency: "$",
    predictionTitle: "2,2x",
    predictionPeriod: 2 * (60 * 60) + 5 * 60,
    favourite: true,
  },
  {
    idx: 144,
    title: "Gold Jan 31",
    category: "commodities" as Category,
    active: false,
    counter: 0,
    tcfPercent: 24,
    tcfValue: 4453,
    tcfCurrency: "$",
    predictionTitle: "2,3x",
    predictionPeriod: 5 * (60 * 60) + 6 * 60,
    favourite: true,
  },
];

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
    assets: data,
  });

  const selectedFilters = Object.entries(state.filter)
    .filter(([_, value]): boolean => value)
    .map(([key]) => key);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <HomeLayout contentCls={styles.homeLayout}>
        {state?.assets
          ?.filter(({ category }) => selectedFilters.includes(category))
          .map(({ idx, ...assetProps }) => (
            <AssetCard {...assetProps} key={idx} />
          )) ?? null}
      </HomeLayout>
    </AppContext.Provider>
  );
}

export default App;
