import comStyles from "../common.module.css";

export interface ToggleProps {
  className?: string;
  onToggle?(): void;
  isOn: boolean;
  children: React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({
  className = "",
  onToggle,
  isOn = false,
  children,
}) => {
  return (
    <div
      className={`clickable ${className} ${comStyles.toggle} ${
        isOn ? comStyles.toggleOn : comStyles.toggleOff
      }`}
      onClick={onToggle}
    >
      {children}
    </div>
  );
};
