import { useContext } from "react";
import { AppContext } from "../../App.context";
import { Text } from "../Text/Text";

export const TotalTrades = () => {
  const {
    state: {
      tradingHistory: { selected, ...history },
    },
  } = useContext(AppContext);

  return (
    <Text.GroupSmallCaption caption="Total trades">
      <Text.NumberBig>{history[selected]?.trades ?? "-"}</Text.NumberBig>
    </Text.GroupSmallCaption>
  );
};
