import { useContext } from "react";
import { AppContext } from "../../App.context";
import { GroupSmallCaption, NumberBig } from "../Text/Text";
import { HistRec } from "../../AppState.type";

export const Profit = () => {
  const { state } = useContext(AppContext);

  const tradingHistory = state?.tradingHistory ?? null;
  const selected = tradingHistory?.selected;
  const det: HistRec | null | undefined = selected
    ? tradingHistory?.[selected]
    : null;
  const profit = det?.profitPercent ?? "-";

  return (
    <GroupSmallCaption caption="Profit">
      <NumberBig>{profit}</NumberBig>
    </GroupSmallCaption>
  );
};
