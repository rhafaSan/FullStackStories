import React, { useEffect, useState } from "react";

const useSemiPersistentState = (
  key: string, 
  initialState: string
  ): [ string, (newValue: string) =>void] => {

    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );
  
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);
  
    return [ value, setValue ];
  }

  export default useSemiPersistentState