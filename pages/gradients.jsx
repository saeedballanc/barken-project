
import CardsGrad from "@/components/cards-grad/cardsGrad";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import Nav from "@/components/navbar/nav";
import { createContext, useState } from "react";








  export const ContextGrad = createContext([]);
 



 const Gradients = (props , children)=>{


    const {myApi} = props;






    const [changeModeApi , setChangeModApi] = useState(myApi);



    <ContextGrad.Provider value={{changeModeApi , setChangeModApi}}>
        {children}
    </ContextGrad.Provider>






    
   const [changeStaticMode , setChangeStaticMode] = useState(false);
   const [changeAllMode , setChangeAllMode] = useState(true);
   const [changeDynamicMode , setChangeDynamicMode] = useState(false);






    const scrollToView = (e) => {

       
    
        document.getElementById("gradients")?.scrollIntoView({
            
          behavior: "smooth",
        });
    
      };





    console.log(myApi)

     
     return<>
     
         
         <Nav />
 
         <Intro scrollToView={scrollToView} changeStaticMode={changeStaticMode}
           setChangeStaticMode={setChangeStaticMode} changeAllMode={changeAllMode}
           setChangeAllMode={setChangeAllMode} changeDynamicMode={changeDynamicMode}
           setChangeDynamicMode={setChangeDynamicMode} changeModeApi={changeModeApi}
            setChangeModApi={setChangeModApi} />

         <CardsGrad myApi={myApi} scrollToView={scrollToView} changeStaticMode={changeStaticMode}
           setChangeStaticMode={setChangeStaticMode} changeAllMode={changeAllMode}
           setChangeAllMode={setChangeAllMode} changeDynamicMode={changeDynamicMode}
           setChangeDynamicMode={setChangeDynamicMode} changeModeApi={changeModeApi}
            setChangeModApi={setChangeModApi} />   



            <Footer />      

     </>
 }



 export default Gradients;








 
 export async function getServerSideProps(){


    let getApi = await fetch('http://localhost:3000/api/gradientsapi');
    let myApi = await getApi.json();

    return{

         props:{

             myApi: myApi.data
         }
    }
}