import commStyles from "./common.module.css";
import styles from "./ToggleGroup.module.css";
import { ToggleProps } from "./Toggle/Toggle";

interface ToggleGroupProps extends ToggleProps {
  onLabel: React.ReactNode;
  offLabel: React.ReactNode;
  getOnCls?(): string;
  getOffCls?(): string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  className = "",
  onToggle,
  isOn = false,
  onLabel,
  offLabel,
  getOnCls,
  getOffCls,
}) => {
  let onCls = isOn ? commStyles.toggleOn : commStyles.toggleOff;
  let offCls = isOn ? commStyles.toggleOff : commStyles.toggleOn;

  if (getOnCls) {
    onCls = `${onCls} ${getOnCls()}`;
  }
  if (getOffCls) {
    offCls = `${offCls} ${getOffCls()}`;
  }

  onCls = `${commStyles.toggle} ${onCls}`;
  offCls = `${commStyles.toggle} ${offCls}`;

  return (
    <div
      className={`clickable ${className} ${styles.toggleGroup}`}
      onClick={onToggle}
    >
      <div className={onCls}>{onLabel}</div>
      <div className={offCls}>{offLabel}</div>
    </div>
  );
};
