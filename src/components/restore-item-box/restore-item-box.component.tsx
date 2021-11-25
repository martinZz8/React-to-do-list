import React from "react";

// styles
import styles from "./restore-item-box.module.scss";

// interfaces
interface IRestoreItemBox {
  onRestoreClick: () => void;
}

const RestoreItemBox: React.FC<IRestoreItemBox> = ({onRestoreClick}) => {

  return (
    <div className={styles.restoreItemBox}>
      <p
        className="noSelect"
        onClick={onRestoreClick}
      >
        Przywróć element
      </p>
    </div>
  );
};

export default RestoreItemBox;