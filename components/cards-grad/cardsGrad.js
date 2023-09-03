
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';






 const CardsGrad = (props)=>{





  const [copiedClass , setCopiedClass] = useState(false);







  let filteredList;
   


   
   const {changeModeApi , setChangeModApi} = props;




   props.changeAllMode ? filteredList = changeModeApi : 



   props.changeStaticMode === true ?
   
     filteredList = changeModeApi.filter(list => {
      return list.mode.toLowerCase().includes('static');
    })

      :

     filteredList = changeModeApi.filter(list => {
      return list.mode.toLowerCase().includes('dynamic');
    });

    


  


     useEffect(()=>{


        setInterval(()=>{

           
           setCopiedClass('');

        } ,2200)

     } ,[])









    return<>
    

    

    <h1 className={`${copiedClass}`}>{copiedClass === 'copiedClass' ? 'Copied!' : '' }</h1>




      <div className='container-cards-grad'>
     

        {



          filteredList.map((grad)=>{



             return(
             
               
               <div id='gradients' key={grad.id} onClick={() => {navigator.clipboard.writeText(grad.copyGradient);
              
                setCopiedClass("copiedClass")}}


               
               className='container-card-grad'>
       

                    <div className={`${grad.gradClass} ${grad.gradClassShadow} grad-back-grad`}></div>


                  <h2 className='name-grad'>{grad.name}</h2>

                 <div className='grad-back'>


                  <IconButton className='favorite-icon' aria-label="add to favorites">
                       <FavoriteIcon />
                  </IconButton>
                 
                 </div>

               </div>




            )


          })
       
        }




      </div>


    </>
 }


 export default CardsGrad;