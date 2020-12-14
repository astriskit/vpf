import { useContext } from "react";
import { Button } from "../Button/Button";
import { GroupSmallCaption, NumberBig } from "../Text/Text";
import { AppContext } from "../../App.context";
import { formatNum } from "../../utils";

export const Trading = () => {
  const { state } = useContext(AppContext);

  const { currency, trading } = state?.trainingWallet ?? {
    currency: "-",
    trading: "-",
  };

  return (
    <GroupSmallCaption caption="Trading">
      <div className="flex justified-space-between">
        <NumberBig>
          <span>{currency}</span>
          <span>{formatNum(trading)}</span>
        </NumberBig>
        <Button>Top Up</Button>
      </div>
    </GroupSmallCaption>
  );
};
