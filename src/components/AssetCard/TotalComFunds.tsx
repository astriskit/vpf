import { formatNum } from "../../utils";
import { BodyCaption, NumberTitle } from "../Text/Text";

type TotalComFundsProps = {
  children: number | "-";
  unit: string;
};

export const TotalComFunds: React.FC<TotalComFundsProps> = ({
  unit,
  children,
}) => {
  const funds = formatNum(children);

  return (
    <div className="totalComFunds flex-column">
      <NumberTitle>
        <span>{unit}</span>
        <span>{funds}</span>
      </NumberTitle>
      <BodyCaption>Total commitment funds</BodyCaption>
    </div>
  );
};
