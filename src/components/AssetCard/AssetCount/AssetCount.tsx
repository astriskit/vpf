import { BodySmallCaption } from "../../Text/Text";
import styles from "./AssetCount.module.css";

type AssetCountProps = {
  children: number;
  className?: string;
};

export const AssetCount: React.FC<AssetCountProps> = ({
  children,
  className = "",
}) => {
  const count = children > 9 ? "9+" : children;

  return (
    <BodySmallCaption
      className={`assetCount ${styles.assetCount} ${className}`}
    >
      {count}
    </BodySmallCaption>
  );
};
