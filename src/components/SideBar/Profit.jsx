import { useContext } from "react";
import { AppContext } from "../../App.context";
import { Text } from "../Text/Text";

export const Profit = () => {
  const {
    state: {
      tradingHistory: { selected, ...history },
    },
  } = useContext(AppContext);

  return (
    <Text.GroupSmallCaption caption="Profit">
      <Text.NumberBig>{history[selected]?.profitPercent ?? "-"}</Text.NumberBig>
    </Text.GroupSmallCaption>
  );
};
