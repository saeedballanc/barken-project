
import { ContextGrad } from '@/pages/gradients';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import { useContext, useEffect } from 'react';






 const MyFavorite = ()=>{





        const {changeModeApi , setChangeModeApi} = useContext(ContextGrad);






    useEffect(()=>{

/////////////////////////////Favorite One
        const pidar1 = document.querySelector('.default-favorite-1');

        pidar1.classList.add('favorite-img' , 'recent-1');
  
/////////////////////////////Favorite Two
        const pidar2 = document.querySelector('.default-favorite-2');

        pidar2.classList.add('favorite-img' , 'recent-2');
/////////////////////////////Favorite Three
        const pidar3 = document.querySelector('.default-favorite-3');

        pidar3.classList.add('favorite-img-biger' , 'recent-3');
/////////////////////////////Favorite Four
        const pidar4 = document.querySelector('.default-favorite-4');

        pidar4.classList.add('favorite-img-biger' , 'recent-4');
/////////////////////////////Favorite Five
        const pidar5 = document.querySelector('.default-favorite-5');

        pidar5.classList.add('favorite-img' , 'recent-5');
/////////////////////////////Favorite Six
        const pidar6 = document.querySelector('.default-favorite-6');

        pidar6.classList.add('favorite-img' , 'recent-6');
/////////////////////////////Favorite Seven
        const pidar7 = document.querySelector('.default-favorite-7');

        pidar7.classList.add('favorite-img' , 'recent-7');
/////////////////////////////Favorite Eight
        const pidar8 = document.querySelector('.default-favorite-8');

        pidar8.classList.add('favorite-img-biger' , 'recent-8');
/////////////////////////////Favorite Nine
        const pidar9 = document.querySelector('.default-favorite-9');

        pidar9.classList.add('favorite-img' , 'recent-9');












       
       
     document.addEventListener('scroll' , (e)=>{
        
        
       let backFavorite = document.querySelector('.back-favorite');
 
           
           
           if(document.documentElement.scrollTop >= '1330'){   
              

                   
                   setTimeout(()=>{
                           
                           backFavorite.setAttribute('style' , 'animation-play-state: running;');
                backFavorite.setAttribute('style' , 'width: 80vw;');
                 
                },10)
             }       
             
         });
         
             



    } ,[]);



     
     return<>
     
         <div className="container">

            <div className="back-favorite" style={{animationPlayState:'paused' , width:'0vw'}}>


               <h1 className="recent">

                 Recent Gradients

               </h1>


            <div style={{display:'flex'}}>

               <div className='default-favorite default-favorite-1'> <div className='picture-light1'></div></div>
               <div className='default-favorite default-favorite-2'><div className='picture-light2'></div></div>
               <div className='default-favorite default-favorite-3' style={{width:'400px'}}><div className='picture-light3'></div></div>

            </div>
            <div style={{display:'flex'}}>

               <div className='default-favorite default-favorite-4' style={{width:'400px'}}><div className='picture-light4'></div></div>
               <div className='default-favorite default-favorite-5'><div className='picture-light5'></div></div>
               <div className='default-favorite default-favorite-6'><div className='picture-light6'></div></div>

            </div>
            <div style={{display:'flex'}}>

               <div className='default-favorite default-favorite-7'><div className='picture-light7'></div></div>
               <div className='default-favorite default-favorite-8' style={{width:'400px'}}><div className='picture-light8'></div></div>
               <div className='default-favorite default-favorite-9'><div className='picture-light9'></div></div>

            </div>



            </div>

         </div>

     </>
 }




 export default MyFavorite;