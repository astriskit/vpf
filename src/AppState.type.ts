type Filter = {
  crypto: boolean;
  commodities: boolean;
  stock: boolean;
  index: boolean;
  currencies: boolean;
};

type OpenTrades = {
  inProgress: number;
  closestOutcome: {
    period: number;
    assetTitle: string;
  };
};
export type HistRec = {
  trades: number;
  profitPercent: string;
};

export type TradeSelect = "all" | "week" | "month" | "day" | ""
export type Category = "crypto" | "commodities" | "index" | "currencies" | "stock"

export type Asset = {
  idx: number,
  title: string,
  category: Category,
  active: boolean,
  counter?: number,
  tcfPercent: number,
  tcfValue: number,
  tcfCurrency: string,
  predictionTitle: string,
  predictionPeriod: number,
  favourite: boolean
}

export type AppState = {
  sideBarOpen: boolean;
  trainingMode: boolean;
  filter: Filter;
  openTrades: OpenTrades;
  tradingHistory: {
    day: HistRec;
    week: HistRec;
    month: HistRec;
    all: HistRec;
    selected: TradeSelect;
  };
  trainingWallet: {
    currency: string;
    trading: number;
    holding: number;
  };
  assets?: Asset[]
};
