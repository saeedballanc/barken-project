
import '@/styles/globals.css'
import '@/styles/gradients.css'
import '@/styles/recents.css'
import localFont from '@next/font/local'
import Head from 'next/head'
 


const tektur = localFont({src:'../public/fonts/Tektur.ttf'})


export default function App({ Component, pageProps }) {




  <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" />
  </Head>



  return <>

    <main >
      <Component {...pageProps} />
    </main>

  </>
}
