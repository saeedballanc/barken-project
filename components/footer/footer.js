
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useEffect } from 'react';







const Footer = ()=>{








     
    return<>
    

      <div className="container-footer" id='footer'>

      <div className='barken-2'>

  <h1 id='barken-opacity-footer' className='h1-11'>b</h1>
   <div className='blur-back blur-1'></div>
  <h1 id='barken-opacity-footer' className='h1-22'>a</h1>
   <div className='blur-back blur-2'></div>
  <h1 id='barken-opacity-footer' className='h1-33'>r</h1>
   <div className='blur-back blur-3'></div>
  <h1 id='barken-opacity-footer' className='h1-44'>k</h1>
   <div className='blur-back blur-4'></div>
  <h1 id='barken-opacity-footer' className='h1-55'>e</h1>
   <div className='blur-back blur-5'></div>
  <h1 id='barken-opacity-footer' className='h1-66'>n</h1>
   <div className='blur-back blur-6'></div>
  
  
  
  <div className='start-2 start-light-2'>
   <h1></h1>
  </div>
  
  
  
   <p className='copy-right'>2023©</p>


</div>



         <div className="container-information">

            <div className="socials">

               <span>
                  <InstagramIcon fontSize='100px'/>
               </span>

               <span>
                  <YouTubeIcon fontSize='100px'/>
               </span>

               <span>
                  <LinkedInIcon fontSize='100px'/>
               </span>

               <span>
                  <TelegramIcon fontSize='100px'/>
               </span>

            </div>

            <div className="about-contact">
                <p>About</p>
                <p>Contact</p>
                <p>Donation</p>
            </div>
         </div>

      </div>


    </>
}



export default Footer;