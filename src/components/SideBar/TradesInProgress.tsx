import { useContext } from "react";
import { AppContext } from "../../App.context";
import { GroupSmallCaption, NumberBig } from "../Text/Text";

export const TradesInProgress = () => {
  const { state } = useContext(AppContext);

  const tradesInProgress = state?.openTrades?.inProgress ?? "-";

  return (
    <GroupSmallCaption caption="Trades in progress">
      <NumberBig>{tradesInProgress}</NumberBig>
    </GroupSmallCaption>
  );
};
