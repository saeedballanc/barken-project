
import Nav from '../components/navbar/nav';
import Head from 'next/head';
import Hexagon from '../components/hexagon/hexagon'
import MyFavorite from '../components/myFavorite/myFavorite';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';









 const Home = ()=>{
 





   const [barkenBegin , setBarkenBegin] = useState(true);




   useEffect(()=>{

      setTimeout(()=>{

         document.querySelector('.barken-1').classList.add('gaga');

         document.querySelector('#star-light').classList.add('start-light');


         


      } ,3300)


   } ,[]);










    return<>




       <Nav />




        <div className='shadow-barken'></div>



       <div className='barken-1'>

          <h1 id='barken-opacity' className={ barkenBegin ? 'h1-11' : 'h1-1'}>b</h1>
          <h1 id='barken-opacity' className={ barkenBegin ? 'h1-22' : 'h1-2'}>a</h1>
          <h1 id='barken-opacity' className={ barkenBegin ? 'h1-33' : 'h1-3'}>r</h1>
          <h1 id='barken-opacity' className={ barkenBegin ? 'h1-44' : 'h1-4'}>k</h1>
          <h1 id='barken-opacity' className={ barkenBegin ? 'h1-55' : 'h1-5'}>e</h1>
          <h1 id='barken-opacity' className={ barkenBegin ? 'h1-66' : 'h1-6'}>n</h1>

          
          
          <div id='star-light' className='start'>
           <h1></h1>
          </div>



       </div>
         

       <Hexagon />




       <MyFavorite />




       <div className='footer-home'>

         <Footer />

       </div>

       
    </>

 }




 export default Home;