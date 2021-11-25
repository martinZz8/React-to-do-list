import React, {useState, useEffect} from "react";

// data
import {initialInputValues, initialErrorsInputValues} from "./input.row.data";

// interfaces
import {IInputValues, IErrorsInputValues} from "./input-row.types";
import {IToDoItem} from "../../types/to-do-item.types";

const useInputRow = (
    manageItem: (item: IToDoItem) => void,
    forcedInitialValues?: IToDoItem,
    setSuccessfullyManagedItem?: () => void
  ) => {
  const setInputInitialValues = (): IInputValues => {
    if (forcedInitialValues) {
      return {
        task: forcedInitialValues.task,
        dueTo: forcedInitialValues.dueTo
      }
    }

    return initialInputValues;
  };

  const [inputValues, setInputValues] = useState<IInputValues>(setInputInitialValues());
  const [errorsInputValues, setErrorsInputValues] = useState<IErrorsInputValues>(initialErrorsInputValues);

  useEffect(() => {
    setErrorsInputValues(initialErrorsInputValues)
  },[inputValues]);

  const handleInputChange = (name: string, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const tryToManageItem = (event: React.FormEvent) => {
    event.preventDefault();
    let canManageItem = true;

    if (inputValues.task === "") {
      setErrorsInputValues(prev => ({
        ...prev,
        task: "Pole nie może być puste"
      }));

      canManageItem = false;
    }

    if (inputValues.dueTo === "") {
      setErrorsInputValues(prev => ({
        ...prev,
        dueTo: "Pole nie może być puste"
      }));

      canManageItem = false;
    }

    // Check if we can manage and item
    if (canManageItem) {
      manageItem({
        task: inputValues.task,
        dueTo: inputValues.dueTo
      });

      setSuccessfullyManagedItem && setSuccessfullyManagedItem();
      setInputValues(initialInputValues);
    }
  };

  return {inputValues, handleInputChange, errorsInputValues, tryToManageItem};
};

export default useInputRow;