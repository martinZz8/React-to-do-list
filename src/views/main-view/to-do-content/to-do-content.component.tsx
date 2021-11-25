import React from "react";

// styles
import styles from "./to-do-content.module.scss";

// hooks
import useToDoContent from "./to-do-content.hook";

// components
import InputRow from "../../../components/input-row/input-row.component";
import ToDoList from "../../../components/to-do-list/to-do-list.component";

const ToDoContent: React.FC = () => {
  const {toDoList, addItemToList, removeItemFromList, updateItemFromList} = useToDoContent();

  return (
    <div className={styles.toDoContent}>
      <div className={styles.header}>
        <p>-- TO DO LIST --</p>
      </div>
      <InputRow
        manageItem={addItemToList}
      />
      <ToDoList
        toDoList={toDoList}
        removeItemFromList={removeItemFromList}
        updateItem={updateItemFromList}
      />
    </div>
  );
};

export default ToDoContent;