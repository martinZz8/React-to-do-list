import React from "react";

// styles
import styles from "./to-do-content.module.scss";

// hooks
import useToDoContent from "./to-do-content.hook";

// components
import InputRow from "../../../components/input-row/input-row.component";
import ToDoList from "../../../components/to-do-list/to-do-list.component";
import RestoreItemBox from "../../../components/restore-item-box/restore-item-box.component";

const ToDoContent: React.FC = () => {
  const {toDoList, addItemToList, removeItemFromList, updateItemFromList, lastRemovedToDoItem, restoreLastRemovedItemFromList} = useToDoContent();

  return (
    <div className={styles.toDoContent}>
      <div className={styles.header}>
        <p>-- TO DO LIST --</p>
      </div>
      <div className={styles.inputRowWrap}>
        <InputRow
          manageItem={addItemToList}
        />
        {
          lastRemovedToDoItem ?
            <div className={styles.restoreItemBoxWrap}>
              <RestoreItemBox
                onRestoreClick={restoreLastRemovedItemFromList}
              />
            </div>
          :
            null
        }
      </div>
      <ToDoList
        toDoList={toDoList}
        removeItemFromList={removeItemFromList}
        updateItem={updateItemFromList}
      />
    </div>
  );
};

export default ToDoContent;