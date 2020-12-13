import styles from "./Text.module.css";

const Text = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

Text.BodySmallCaption = ({ children }) => (
  <Text className={styles.bodySmallCaption + " type-body-small-caption-9-px"}>
    {children}
  </Text>
);

Text.NumberBig = ({ children }) => (
  <Text className="type-number-big">{children}</Text>
);

Text.NumberMedium = ({ children }) => (
  <Text className="type-number-medium">{children}</Text>
);

Text.BodyTitle = ({ children }) => (
  <Text className="type-body-title">{children}</Text>
);

Text.BodyCaption = ({ children }) => (
  <Text className="type-body-caption">{children}</Text>
);

Text.ButtonLabelSmall = ({ children }) => (
  <Text className="type-button-label-small">{children}</Text>
);

Text.GroupSmallCaption = ({ children, caption, className = "" }) => (
  <div className={`flex-column ${styles.groupSmallCaption} ${className}`}>
    <Text.BodySmallCaption>{caption}</Text.BodySmallCaption>
    {children}
  </div>
);

export { Text };
