import { useContext } from "react";
import { AppContext } from "../../App.context";
import { Text } from "../Text/Text";

export const ClosestOutcome = () => {
  const {
    state: {
      openTrades: {
        closestOutcome: { period: p, assetTitle },
      },
    },
  } = useContext(AppContext);

  const pMin = Number.parseInt(p / 60);
  const pSec = Number.parseInt(p % 60);
  const period = `${pMin}m ${pSec}s`;

  return (
    <Text.GroupSmallCaption caption="Closest outcome">
      <Text.BodyTitle>{period}</Text.BodyTitle>
      <Text.BodyCaption>{assetTitle}</Text.BodyCaption>
    </Text.GroupSmallCaption>
  );
};
