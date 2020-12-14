import { Category } from "../../AppState.type";
import { IconStar } from "../IconStar";
import { BodyTitle, BodyCaption } from "../Text/Text";

interface AssetProps {
  children: string;
  type: Category;
  isFavourite: boolean;
}

export const Asset: React.FC<AssetProps> = ({
  children,
  type,
  isFavourite,
}) => (
  <div className="asset flex">
    <IconStar pathFill={isFavourite ? "green" : "white"} />
    <div className="flex-column">
      <BodyTitle>{children}</BodyTitle>
      <BodyCaption>{type}</BodyCaption>
    </div>
  </div>
);
