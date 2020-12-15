import { BodyCaption, BodyMedium } from "../Text/Text";
import IconPrediction from "./icon-prediction.svg";

type PredictionProps = {
  children: string;
  isActive: boolean;
  period: number | "";
};

export const Prediction: React.FC<PredictionProps> = ({
  children,
  isActive,
  period,
}) => {
  let caption = isActive ? "Outcome in " : "Open in ";

  if (period) {
    const hour = Number.parseInt("" + period / (60 * 60));
    const min = Number.parseInt("" + (period % (60 * 60)) / 60);
    caption += `${hour}h ${min}m`;
  } else {
    caption += "-";
  }

  return (
    <div className="prediction flex-column">
      <div className="flex">
        <img src={IconPrediction} alt="prediction-title" />
        <BodyMedium>{children}</BodyMedium>
      </div>
      <BodyCaption>{caption}</BodyCaption>
    </div>
  );
};
