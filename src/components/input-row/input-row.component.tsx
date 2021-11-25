import React from "react";

// styles
import styles from "./input-row.module.scss";

// hooks
import useInputRow from "./input-row.hook";

// components
import InputField from "../ui/input-field/input-field.component";
import Button from "../ui/button/button.component";

// interfaces
import {IToDoItem} from "../../types/to-do-item.types";

interface IInputRow {
  manageItem: (item: IToDoItem) => void;
  forcedInitialValues?: IToDoItem;
  setSuccessfullyManagedItem?: () => void;
  noPadding?: boolean;
}

const InputRow: React.FC<IInputRow> = ({manageItem, forcedInitialValues, setSuccessfullyManagedItem, noPadding}) => {
  const {inputValues, handleInputChange, errorsInputValues, tryToManageItem} = useInputRow(manageItem, forcedInitialValues, setSuccessfullyManagedItem);

  return (
    <form
      className={`${styles.inputRow} ${noPadding ? styles.noPadding : ""}`}
      onSubmit={(e: React.FormEvent) => tryToManageItem(e)}
      noValidate
    >
      <div className={styles.inputFieldWrap}>
        <InputField
          type="text"
          name="task"
          label="Zadanie"
          placeholder="Zadanie"
          value={inputValues.task}
          handleChange={handleInputChange}
          isError={errorsInputValues.task !== ""}
          errorMessage={errorsInputValues.task}
        />
      </div>
      <div className={styles.inputDateWrap}>
        <InputField
          type="date"
          name="dueTo"
          label="Data zakończenia"
          placeholder="-"
          value={inputValues.dueTo}
          handleChange={handleInputChange}
          isError={errorsInputValues.dueTo !== ""}
          errorMessage={errorsInputValues.dueTo}
        />
      </div>
      <div className={styles.submitButtonWrap}>
        <Button
          type="submit"
          title={!forcedInitialValues ? "Dodaj" : "Zapisz"}
          fontColor="white"
          backgroundColor="lightPurple"
        />
      </div>
    </form>
  );
};

export default InputRow;