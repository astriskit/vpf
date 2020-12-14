import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <div
    className={`clickable type-button-label-small ${styles.button} ${className}`}
  >
    {children}
  </div>
);
