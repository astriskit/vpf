import comStyles from "../common.module.css";

export const Toggle = ({
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
