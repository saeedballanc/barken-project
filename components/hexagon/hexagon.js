import { Style } from "@mui/icons-material";
import { createElement, useEffect, useMemo, useRef, useState } from "react";



  






const Hexagon = () => {
   
  
   

   const [widthSize , setWidthSize] = useState();
   const [heightSize , setHeightSize] = useState();
   
   

   let width;
   let height;
   let box ;




   if (typeof window !== 'undefined') {
      

      width = document.querySelector("#width").value;
      height =  document.querySelector("#height").value;
   

      box = document.querySelector('.box-size');
      box.style.width = width / 2 + 'px';
   box.style.height = height / 2 + 'px';

   


   if(width > 1800 || height > 1100){

      box.style.width = width / 4 + 'px';
      box.style.height = height / 4 + 'px';
      box.style.right = '26vw'
    }


   if(width < 1800 || height < 1100){

      box.style.width = width / 2 + 'px';
      box.style.height = height / 2 + 'px';
      box.style.right = '19vw'
    }


   if(width < 1300 || height < 800){

      box.style.width = width / 2 + 'px';
      box.style.height = height / 2 + 'px';
      box.style.right = '50vw'
    }
   


 }


     
    
   



   
   
   const updateDimensions = () => {

      setWidthSize(window.innerWidth);
      setHeightSize(window.innerHeight);
  }
   





   
   useEffect(()=>{
    
          
  
       
       setTimeout(()=>{
          

          document.querySelector('.container-hex').classList.add('gugu');

    

    
    document.addEventListener('scroll' , (e)=>{


       document.querySelectorAll('.hexagon').forEach((e)=>{
          
      
             if(document.documentElement.scrollTop <= '700'){

                  e.setAttribute('style' , 'animation-play-state: running;')
               
             }       
             
            })
         });




    document.addEventListener('scroll' , (e)=>{


       document.querySelectorAll('.show-size').forEach((e)=>{
          
      
             if(document.documentElement.scrollTop <= '700'){

                  e.setAttribute('style' , 'animation-play-state: running;');
                  
                  
                  setInterval(()=>{
                     
                     e.classList.add('opacity')

                  },4000)
             }       
             
            })
         });





                let boxSize = document.querySelector('.box-size');

   
                document.addEventListener('scroll' , (e)=>{
                   
                   
                   
                   if(document.documentElement.scrollTop <= '700'){

                      setTimeout(()=>{
                         
                         
                     boxSize.classList.add('show')
                     
                  } ,2000);
                  
               }
               
               
               
               if(document.documentElement.scrollTop <= '700'){
                  
                  
                  setTimeout(()=>{
                     
                     boxSize.style.opacity = '1'
                     
                  } ,2000);
                  
               }
               
               
            });

            
         } ,100)
         
         
         
         
         
         setWidthSize(document.querySelector("#width").value = innerWidth);
         setHeightSize(document.querySelector("#height").value = innerHeight);
         
         
         
         window.addEventListener("resize", updateDimensions);
         
         
         return () =>{ 
            
            window.removeEventListener("resize", updateDimensions);
         }
         





      } ,[]);



      




     





    return <>


    <div className='container-hex'>

        <div className='row row-2 '> 
        
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-3 row-33'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-4 row-44'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-5 row-55'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-6 row-66'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon hex5'></div>
           <div className='hexagon hex4'></div>
           <div className='hexagon hex1'></div>
           <div className='hexagon hex2'></div>
           <div className='hexagon hex3'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-7 row-77'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-8 row-88'> 

           <div id="screenSize" className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-9 row-99'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation px show-size' style={{animationPlayState: 'paused'}}><h1>Screen</h1></div>
           <div className='hexagon hex-animation px show-size' style={{animationPlayState: 'paused'}}><h1>Size</h1></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-10 row-100'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation px show-size' style={{animationPlayState: 'paused'}}><h1>Width</h1></div>
           <div className='hexagon hex-animation px show-size' style={{animationPlayState: 'paused'}}><h1>PX</h1></div>
           <div className='hexagon hex-animation px show-size' style={{animationPlayState: 'paused'}}><h1>Height</h1></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-11 row-111'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>


            <div className='number-box-size hexagon hex-animation show-size' style={{animationPlayState: 'paused'}}><input id="width" value={widthSize} type="number"
              style={{position:"absolute",top:"25px",left:"16px"}} onChange={(e)=>setWidthSize(e.target.value)}/></div>


            <div className='number-box-size hexagon hex-animation show-size' style={{animationPlayState: 'paused'}}><input id="height" value={heightSize} type="number"
              style={{position:"absolute",top:"25px",left:"21px"}} onChange={(e)=>setHeightSize(e.target.value)}/></div>


           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-12 row-112'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-13 row-113'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>



          
               <div className="box-size"></div>




           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-14 row-114'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-15 row-115'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-16 row-116'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-17 row-117'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-18 row-118'> 

           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
           <div className='hexagon hex-animation'></div>
        
        </div>
        <div className='row row-19 row-119'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-20 row-120'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-21 row-121'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
        <div className='row row-22 row-122'> 

           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
           <div className='hexagon'></div>
        
        </div>
    </div>



   <div className="back-hex">
      
   </div>
    



    </>
}
 
    


export default Hexagon;