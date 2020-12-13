import { useContext } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { AppContext } from "../../App.context";
import { formatNum } from "../../utils";

export const Holding = () => {
  const {
    state: {
      trainingWallet: { currency, holding },
    },
  } = useContext(AppContext);

  return (
    <Text.GroupSmallCaption caption="Holding">
      <div className="flex justified-space-between">
        <Text.NumberMedium>
          <span>{currency}</span>
          <span>{formatNum(holding)}</span>
        </Text.NumberMedium>
        <Button>Buy Dai</Button>
      </div>
    </Text.GroupSmallCaption>
  );
};
