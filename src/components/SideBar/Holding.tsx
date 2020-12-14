import { useContext } from "react";
import { Button } from "../Button/Button";
import { GroupSmallCaption, NumberMedium } from "../Text/Text";
import { AppContext } from "../../App.context";
import { formatNum } from "../../utils";

export const Holding = () => {
  const { state } = useContext(AppContext);

  const currency = state?.trainingWallet?.currency ?? "-";
  const holding = state?.trainingWallet?.holding ?? "-";

  return (
    <GroupSmallCaption caption="Holding">
      <div className="flex justified-space-between">
        <NumberMedium>
          <span>{currency}</span>
          <span>{formatNum(holding)}</span>
        </NumberMedium>
        <Button>Buy Dai</Button>
      </div>
    </GroupSmallCaption>
  );
};
