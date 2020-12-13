import styles from "./Avatar.module.css";

export const Avatar = ({ imgSrc, count, className }) => {
  return (
    <div className={`clickable ${styles.avatar} ${className}`}>
      {count && (
        <div className="flex justified-center type-body-small-caption-9-px">
          {count > 99 ? "99+" : count}
        </div>
      )}
      <img src={imgSrc} alt="User" />
    </div>
  );
};
