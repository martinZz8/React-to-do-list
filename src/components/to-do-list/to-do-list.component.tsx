import React from "react";

// styles
import styles from "./to-do-list.module.scss";

// components
import ToDoItem from "./item/to-do-item.component";

// interfaces
import {ITDOToDoItem, IToDoItem} from "../../types/to-do-item.types";

interface IToDoList {
  toDoList: IToDoItem[];
  removeItemFromList: (id: number) => void;
  updateItem: (id: number, newItem: ITDOToDoItem) => void;
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
                  key={item.id}
                  className={styles.toDoItemWrap}
                >
                  <ToDoItem
                    item={item}
                    removeItemFromList={() => removeItemFromList(item.id)}
                    updateItem={(newItem) => updateItem(item.id, newItem)}
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