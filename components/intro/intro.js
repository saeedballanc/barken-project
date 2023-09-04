
import { useEffect, useState } from "react";
import HexagonIntro from "../hexagon/hexagonintro";












const Intro =(props)=>{




    const {scrollToView} = props;

  





   function ChangeStaticMode(){

       props.setChangeStaticMode(true);
       props.setChangeAllMode(false);
       props.setChangeDynamicMode(false);
   }
   function ChangeAllMode(){

       props.setChangeStaticMode(false);
       props.setChangeAllMode(true);
       props.setChangeDynamicMode(false);
   }
   function ChangeDynamicMode(){

       props.setChangeStaticMode(false);
       props.setChangeAllMode(false);
       props.setChangeDynamicMode(true);
   }







   



     return<>


     <div className="all-page-gradient">

     
        <div className="container-all-intro">


         <p>{props.changeModeApi.length} Gradients . React & Vue libraries</p>

         <h1>Static and Dinamic Gradients, You Can Join US and Add To The Gradients</h1>
        
         <a onClick={()=>scrollToView()} className="back-blur"><h2>Gradients</h2></a>
         <div className="back-grad"></div>
         <div className="container-intro"></div>

         <HexagonIntro/>

        </div>










        <div className="container-nav-gradients">

          <div onClick={ChangeStaticMode} className="back-blur-nav nav-grad-bottons-1"><h2>Static</h2><p>static gradients, easy copy and paste in software or css,...</p></div>
           <div className={`${props.changeStaticMode === true ? 'back-grad-nav' : ''} nav-grad-bottons-1`}></div>
  
          <div onClick={ChangeAllMode} className="back-blur-nav nav-grad-bottons-2"><h2>All</h2><p>all gradients show for you statics and dynamics</p></div>
           <div className={`${props.changeAllMode === true ? 'back-grad-nav' : ''} nav-grad-bottons-2 `}></div>
           
          <div onClick={ChangeDynamicMode} className="back-blur-nav nav-grad-bottons-3"><h2>Dynamic</h2><p>dynamic gradients have css more line code and more details than static gradients or have animation</p></div>
           <div className={`${props.changeDynamicMode === true ? 'back-grad-nav' : ''} nav-grad-bottons-3 `}></div>

        </div>



     </div>

     </>
}



export default Intro;