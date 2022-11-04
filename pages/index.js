import Head from 'next/head'
import Image from 'next/image'
import articleStyles from '../styles/Article.module.css'
import bne from '../public/Images/SouthBank30-12-21.jpeg'
import awsLogo from '../public/Images/cloud.svg'
import reactLogo from '../public/Images/reactImg.ico'
import ball8Logo from '../public/Images/ball.png'
import SJsponceLogo from '../public/Images/favicon-32x32.png'
import Magic from '../pages/magicBall.ts'
//import ids from './article/[id]/index.js'

export default function Home({}) {
  {/*test articles in console log
console.log(articles);
//Removed test code. 
 {articles.map( (article) => (
      <>
      <h3> Testing js map </h3>
        <p key ={article.title}>{article.title}</p> 
        </> 
      ))}
// Home({articles})*/}
  return (
    <div className='scroll-smooth'>
      {/*<html lang='en'/>  //Caused hydration errors*/}
       <Head> 
        <title>SwearJar</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='keywords' content='nextjs, react, web apps, web site, programming, front end'/>
      </Head>

      <article className='bg-slate-200 text-center'>
        <h1 className="text-4xl font-bold m-4 p-4"> Building Swearjar website with Nextjs</h1>
        <div>
          <p className='font-bold text-2xl m-2 p-1 border-black'>My web developer portfolio.</p>
          <br/>
        <p>Front-end website for production development testing. <br />
        <b>Responsive Web Design is in testing mode.</b><br />
         View current version via Github Footer link. </p>
         <br /> 

        
           <p>Server sponcership available with PayPal to have credits added to the website.</p>      
           <div className='flex justify-center items-center m-2 p-2'>
            <form className='flex justify-center items-center' action="https://www.paypal.com/donate" method="post" target="_top" >
              <input type="hidden" name="business" value="E2HRYJQA2AFBJ" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="item_name" value="Website donation to help pay the server running costs." />
              <input type="hidden" name="currency_code" value="AUD" />
              <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif" 
                border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="Donate" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />   
            </form>
          </div>
       
        <p className='p-2 m-2'>Tech information: <br />
        Cloud hosted on AWS (Amazon Web Services). <br />
        AWS Route 53 and S3 storage bucket used to run the stactic webpage. <br />  
        Running on HTTPS (SSL) secure connection on port 443. <br />
        In 2022, new features will be added and tested.
        </p>
        <br /> 
          <div className='flex justify-center items-center'>
            <div className=' bg-sky-100 w-1/4 border-2 rounded-md border-gray-500 shadow-2xl'>
              <b className='m-2'> Click the cloud below to visit AWS console.</b>
              <button className={articleStyles.button}><a href="http://www.aws.amazon.com/console" target="_blank" rel="noopener noreferrer">
                <Image className={articleStyles.awsLogo} src={awsLogo} alt="cloud" id="xs-cloud" height="48" width="48" /></a>
              </button>
            </div>
          </div>
        <br />
        <p className='pb-2'>
          Working with all things JavaScript to understand Full Stack development.
        </p>
      </div>
    </article>

    <article className='bg-slate-200 text-center mt-2'>
      <div className=""> 
        <div className="flex mx-2 p-4 justify-center item-center"> 
        <a className='flex justify-center item-center' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <Image className={articleStyles.reactLogo} src={reactLogo}  alt="React logo" height="64" width="64"/>
        </a>
        </div>               
        <p className='mb-2 p-2'><b>Website running the React UI component library and Nextjs framework. Originally built with HTML, CSS(Flexbox) and JavaScript.</b>
        <br />
        Powered by React/Nextjs. NodeJS(backend code) and MongoDB(database) software is in the development stage.
        <br />
        Test Rendering: SSR (Server-Side Rending), CSR (Client-Side Rendering) and Rehydration.
        <br />
        Performance Testing: TTFB (Time to First Byte), FP (First Paint) - any pixel become visible and 
       <br /> TTI (Time To Interactive) - time at which page becomes interactive.</p>
      </div>        
    </article>
    <div>
      <Image src={bne} id="bne" alt="Brisbane Christmas sunset" height="" width="" />
    </div>

    <hr />

    <article className='bg-gray-200 text-center'>
      <div className="my-2">
        <h2 className='font-size-lg'>Testing React/Nextjs and JavaScript via DOM</h2>
        <Image className="ball" src={ball8Logo}  alt="magic decision ball" height="64" width="64" />
        <h3 className="pBall, h3">Magic Decision ball</h3>
        <button className={articleStyles.button} id="magic" onClick={Magic}>Ask a question and click for an answer?</button> 

        <hr className=''></hr>

        <h3 className=''>Change background Colour</h3>
        <button className={articleStyles.button} type="button" onClick={() => document.querySelector('body').style.backgroundColor = "#D0D4E7"}>Change colour</button>
        <button className={articleStyles.button} type="button" onClick={() => document.querySelector('body').style.backgroundColor = "#FFFFFF"}>Reset colour</button> 
      
        <h3 className={articleStyles.sponcer}>Sponsors & Website credits : 
        <Image className="SJsponcerLogo" src={SJsponceLogo} alt="sJs" height="32" width="32"/>
        </h3>
      </div>
    </article>

    </div>
  )
}

//export const getStaticProps = async () => {
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
//  const articles = await res.json()

 // return {
//    props: {
  //    articles
  //  }
//  }
//}
