
import { createContext, useState } from "react";







 export const ContextGrad = createContext();




const ContextGradState = (children)=>{


    const [changeModeApi , setChangeModApi] = useState();



    <ContextGrad.Provider value={{changeModeApi , setChangeModApi}}>
        {children}
    </ContextGrad.Provider>
    
}



export default ContextGradState;