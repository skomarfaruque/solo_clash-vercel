import React from "react";
import styles from "./SubscriptionCss.module.css";

interface SubscriptionCssProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SubscriptionCss: React.FC<SubscriptionCssProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles["subscription-css"]} ${className}`}
    >
      {children}
    </button>
  );
};

export default SubscriptionCss;
