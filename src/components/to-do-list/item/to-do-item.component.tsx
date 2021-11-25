import React from "react";

// styles
import styles from "./to-do-item.module.scss";

// hooks
import useToDoItem from "./to-do-item.hook";

// utilities
import {changeDateFormatToPl} from "../../../functions/change-date-format-to-pl";

// components
import Button from "../../ui/button/button.component";

// interfaces
import {ITDOToDoItem, IToDoItem} from "../../../types/to-do-item.types";
import InputRow from "../../input-row/input-row.component";

interface IToDoItemInt {
  item: IToDoItem;
  removeItemFromList: () => void;
  updateItem: (newItem: ITDOToDoItem) => void;
}

const ToDoItem: React.FC<IToDoItemInt> = ({item, removeItemFromList, updateItem}) => {
  const {isEditFormOpened, toggleEditFormOpened, setIsEditFormOpened} = useToDoItem();

  return (
    <div className={styles.toDoItem}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.itemValue}>
            <p>
              <b>Zadanie:</b> {item.task}
            </p>
          </div>
          <div className={styles.itemValue}>
            <p className={styles.bold}>
              <b>Data zakończenia:</b> {changeDateFormatToPl(item.dueTo)}
            </p>
          </div>
        </div>
        <div className={styles.buttonsRow}>
          <div className={styles.buttonWrap}>
            <Button
              type="button"
              backgroundColor="lightPurple"
              fontColor="white"
              title="Edytuj"
              handleClick={toggleEditFormOpened}
            />
          </div>
          <div className={styles.buttonWrap}>
            <Button
              type="button"
              backgroundColor="red"
              fontColor="white"
              title="Usuń"
              handleClick={removeItemFromList}
            />
          </div>
        </div>
      </div>
      {
        isEditFormOpened ?
          <>
            <div className={styles.divider}/>
            <InputRow
              manageItem={updateItem}
              forcedInitialValues={item}
              setSuccessfullyManagedItem={() => setIsEditFormOpened(false)}
              noPadding
            />
          </>
        :
          null
      }
    </div>
  );
};

export default ToDoItem;