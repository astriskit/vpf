import { useContext } from "react";
import { AppContext } from "../../App.context";
import { Text } from "../Text/Text";

export const TradesInProgress = () => {
  const {
    state: {
      openTrades: { inProgress: tradesInProgress = 0 },
    },
  } = useContext(AppContext);

  return (
    <Text.GroupSmallCaption caption="Trades in progress">
      <Text.NumberBig>{tradesInProgress}</Text.NumberBig>
    </Text.GroupSmallCaption>
  );
};
