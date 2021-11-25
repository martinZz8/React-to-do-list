import {useState, useEffect} from "react";

const useToDoItem = () => {
  const [isEditFormOpened, setIsEditFormOpened] = useState<boolean>(false);

  const toggleEditFormOpened = () => {
    setIsEditFormOpened(!isEditFormOpened);
  };

  return {isEditFormOpened, toggleEditFormOpened, setIsEditFormOpened};
};

export default useToDoItem;