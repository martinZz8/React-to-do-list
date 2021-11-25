import React from "react";

// styles
import styles from "./to-do-list.module.scss";

// components
import ToDoItem from "./item/to-do-item.component";

// interfaces
import {IToDoItem} from "../../types/to-do-item.types";

interface IToDoList {
  toDoList: IToDoItem[];
  removeItemFromList: (index: number) => void;
  updateItem: (index: number, newItem: IToDoItem) => void;
}

const ToDoList: React.FC<IToDoList> = ({toDoList, removeItemFromList, updateItem}) => {

  return (
    <div className={`${styles.toDoList} ${toDoList.length === 0 ? styles.noItemsMessage : ""}`}>
      {
        toDoList.length === 0 ?
          <p>Nie masz żadnych zadań</p>
        :
          <div className={`customScrollBar ${styles.content}`}>
            {
              toDoList.map((item, index) => (
                <div
                  key={index}
                  className={styles.toDoItemWrap}
                >
                  <ToDoItem
                    item={item}
                    removeItemFromList={() => removeItemFromList(index)}
                    updateItem={(newItem) => updateItem(index, newItem)}
                  />
                </div>
              ))
            }
          </div>
      }
    </div>
  );
};

export default ToDoList;