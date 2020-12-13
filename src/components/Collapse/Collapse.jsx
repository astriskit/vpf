import { useEffect, useState } from "react";
import styles from "./Collapse.module.css";

export const Collapse = ({
  contentCls = "",
  open,
  toggleOpen,
  label,
  icon,
  children,
  defaultOpen = true,
}) => {
  const [openIn, setOpenIn] = useState(defaultOpen);

  useEffect(() => {
    typeof open === "boolean" && setOpenIn(open);
  }, [open]);

  const toggleOpenIn = () => {
    if (toggleOpen) {
      toggleOpen();
    } else {
      if (openIn) {
        setOpenIn(false);
      } else {
        setOpenIn(true);
      }
    }
  };

  return (
    <div
      className={`flex-column ${styles.collapse} ${
        openIn ? styles.bordered : ""
      }`}
    >
      <div className="flex" onClick={toggleOpenIn}>
        {icon}
        <span className="type-links-caption">{label}</span>
        <span className={openIn ? "" : styles.collapseOpen}>›</span>
      </div>
      {openIn && (
        <div className={`${styles.children} ${contentCls}`}>{children}</div>
      )}
    </div>
  );
};
