import { Asset as AssetCardProps } from "../../AppState.type";
import { Asset } from "./Asset";
import { Prediction } from "./Prediction";
import { TotalComFunds } from "./TotalComFunds";
import { AssetCount } from "./AssetCount/AssetCount";
import styles from "./AssetCard.module.css";

export const AssetCard: React.FC<Omit<AssetCardProps, "idx">> = ({
  title,
  category,
  active,
  counter,
  tcfPercent,
  tcfValue,
  tcfCurrency,
  predictionTitle,
  predictionPeriod,
  favourite,
}) => {
  const tcfUnit = tcfCurrency; // $ | %
  const tcf = tcfValue || tcfPercent; // tcfValue | tcfPercent
  return (
    <div
      className={`assetCard flex justified-space-between ${
        !active ? "inActive" : ""
      } ${styles.assetCard}`}
    >
      <Asset isFavourite={favourite} type={category}>
        {title}
      </Asset>
      <Prediction isActive={active} period={predictionPeriod}>
        {predictionTitle}
      </Prediction>
      {!!counter && <AssetCount>{counter}</AssetCount>}
      <TotalComFunds unit={tcfUnit}>{tcf}</TotalComFunds>
    </div>
  );
};
