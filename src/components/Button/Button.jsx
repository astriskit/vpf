import styles from "./Button.module.css";

export const Button = ({ children, className }) => (
  <div
    className={`clickable type-button-label-small ${styles.button} ${className}`}
  >
    {children}
  </div>
);
