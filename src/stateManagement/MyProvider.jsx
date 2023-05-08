import React, { useState, useEffect } from "react";
import { MyContext } from "./MyContext";


function MyProvider({children}) {

    const [ip, setIp] = useState([]);


    const state ={
      ip,
      setIp,
    }

  return (
    <MyContext.Provider value={state}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider