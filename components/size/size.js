import { useEffect, useState } from "react";



const Size = () => {




   




    useEffect(()=>{
             
         
 
            document.querySelector('h1').innerText = innerHeight
             
         
     } ,[]);
 

    

    return <>

         <h1 style={{color:"orange" , fontSize:"70px"}}></h1>
        
    </>
}


 
export default Size;