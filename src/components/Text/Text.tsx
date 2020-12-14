import styles from "./Text.module.css";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

const BodySmallCaption: React.FC<TextProps> = ({
  children,
  className = "",
}) => (
  <Text
    className={
      styles.bodySmallCaption + " type-body-small-caption-9-px" + className
    }
  >
    {children}
  </Text>
);

const NumberBig: React.FC<Omit<TextProps, "className">> = ({ children }) => (
  <Text className="type-number-big">{children}</Text>
);

const NumberTitle: React.FC<Omit<TextProps, "className">> = ({ children }) => (
  <Text className="type-number-title">{children}</Text>
);

const NumberMedium: React.FC<Omit<TextProps, "className">> = ({ children }) => (
  <Text className="type-number-medium">{children}</Text>
);

const BodyTitle: React.FC<Omit<TextProps, "className">> = ({ children }) => (
  <Text className="type-body-title">{children}</Text>
);

const BodyMedium: React.FC<Omit<TextProps, "className">> = ({ children }) => (
  <Text className="type-body-medium">{children}</Text>
);

const BodyCaption: React.FC<Omit<TextProps, "className">> = ({ children }) => (
  <Text className="type-body-caption">{children}</Text>
);

const ButtonLabelSmall: React.FC<Omit<TextProps, "className">> = ({
  children,
}) => <Text className="type-button-label-small">{children}</Text>;

interface GroupSmallCaptionProps extends TextProps {
  caption: React.ReactNode;
}
const GroupSmallCaption: React.FC<GroupSmallCaptionProps> = ({
  children,
  caption,
  className = "",
}) => (
  <div className={`flex-column ${styles.groupSmallCaption} ${className}`}>
    <BodySmallCaption>{caption}</BodySmallCaption>
    {children}
  </div>
);

export {
  Text,
  BodySmallCaption,
  NumberBig,
  NumberTitle,
  NumberMedium,
  BodyTitle,
  BodyMedium,
  BodyCaption,
  ButtonLabelSmall,
  GroupSmallCaption,
};
