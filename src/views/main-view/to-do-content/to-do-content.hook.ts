import {useState, useEffect} from "react";

// interfaces
import {ITDOToDoItem, IToDoItem} from "../../../types/to-do-item.types";

const useToDoContent = () => {
  const [toDoList, setToDoList] = useState<IToDoItem[]>([]);
  const [lastRemovedToDoItem, setLastRemovedToDoItem] = useState<IToDoItem | null>(null);

  const getHighestItemId = (): number => {
    let highestId = 1;
    for (let item of toDoList) {
      if (item.id > highestId) {
        highestId = item.id;
      }
    }
    return highestId;
  };

  const addItemToList = (item: ITDOToDoItem): void => {
    setToDoList(prev => [
      ...prev,
      {
        id: getHighestItemId() + 1,
        task: item.task,
        dueTo: item.dueTo
      }
    ]);
  };

  const removeItemFromList = (id: number): void => {
    let shallowToDoList = [...toDoList];
    let foundItemIndex = shallowToDoList.findIndex(item => item.id === id);
    if (foundItemIndex !== -1) {
      setLastRemovedToDoItem(shallowToDoList[foundItemIndex]);
      shallowToDoList.splice(foundItemIndex, 1);
      setToDoList(shallowToDoList);
    }
  };

  const restoreLastRemovedItemFromList = () => {
    if (lastRemovedToDoItem) {
      addItemToList({
        task: lastRemovedToDoItem.task,
        dueTo: lastRemovedToDoItem.dueTo
      });
      setLastRemovedToDoItem(null);
    }
  };

  const updateItemFromList = (id: number, newItem: ITDOToDoItem): void => {
    let foundItemIndex = toDoList.findIndex(item => item.id === id);
    if (foundItemIndex !== -1) {
      setToDoList(prev => [
        ...prev.slice(0, foundItemIndex),
        {
          ...prev[foundItemIndex],
          dueTo: newItem.dueTo,
          task: newItem.task
        },
        ...prev.slice(foundItemIndex+1, prev.length)
      ]);
    }
  };

  return {toDoList, addItemToList, removeItemFromList, updateItemFromList, lastRemovedToDoItem, restoreLastRemovedItemFromList};
};

export default useToDoContent;