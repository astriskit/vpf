import { useContext } from "react";
import { AppContext } from "../../App.context";
import { HistRec } from "../../AppState.type";
import { GroupSmallCaption, NumberBig } from "../Text/Text";

export const TotalTrades = () => {
  const { state } = useContext(AppContext);

  const tradingHistory = state?.tradingHistory ?? null;
  const selected = tradingHistory?.selected;
  const det: HistRec | null | undefined = selected
    ? tradingHistory?.[selected]
    : null;
  const trades = det?.trades ?? "-";

  return (
    <GroupSmallCaption caption="Total trades">
      <NumberBig>{trades}</NumberBig>
    </GroupSmallCaption>
  );
};
