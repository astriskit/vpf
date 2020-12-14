import { useContext } from "react";
import { AppContext } from "../../App.context";
import { GroupSmallCaption, BodyTitle, BodyCaption } from "../Text/Text";

const padZero = (n: number): string =>
  n < 10 && n > -10 ? n.toString().padStart(2, "0") : n.toString();

export const ClosestOutcome = () => {
  const { state } = useContext(AppContext);

  const p = state?.openTrades?.closestOutcome?.period;
  const assetTitle = state?.openTrades?.closestOutcome?.assetTitle;
  const pMin = p ? padZero(Number.parseInt(p / 60 + "")) : "";
  const pSec = p ? padZero(Number.parseInt((p % 60) + "")) : "";
  const period = `${pMin}m ${pSec}s`;

  return (
    <GroupSmallCaption caption="Closest outcome">
      <BodyTitle>{period}</BodyTitle>
      <BodyCaption>{assetTitle}</BodyCaption>
    </GroupSmallCaption>
  );
};
