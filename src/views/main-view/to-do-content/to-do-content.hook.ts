import {useState, useEffect} from "react";

// interfaces
import {IToDoItem} from "../../../types/to-do-item.types";

const useToDoContent = () => {
  const [toDoList, setToDoList] = useState<IToDoItem[]>([]);

  const addItemToList = (item: IToDoItem): void => {
    setToDoList(prev => [
      ...prev,
      item
    ]);
  };

  const removeItemFromList = (index: number): void => {
    let shallowToDoList = [...toDoList];
    shallowToDoList.splice(index, 1);
    setToDoList(shallowToDoList);
  };

  const updateItemFromList = (index: number, newItem: IToDoItem): void => {
    setToDoList(prev => [
      ...prev.slice(0, index),
      {
        ...prev[index],
        dueTo: newItem.dueTo,
        task: newItem.task
      },
      ...prev.slice(index+1, prev.length)
    ]);
  };

  return {toDoList, addItemToList, removeItemFromList, updateItemFromList};
};

export default useToDoContent;