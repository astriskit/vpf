import { useContext } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { AppContext } from "../../App.context";
import { formatNum } from "../../utils";

export const Trading = () => {
  const {
    state: {
      trainingWallet: { currency, trading },
    },
  } = useContext(AppContext);

  return (
    <Text.GroupSmallCaption caption="Trading">
      <div className="flex justified-space-between">
        <Text.NumberBig>
          <span>{currency}</span>
          <span>{formatNum(trading)}</span>
        </Text.NumberBig>
        <Button>Top Up</Button>
      </div>
    </Text.GroupSmallCaption>
  );
};
