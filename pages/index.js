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
    <div>
      {/*<html lang='en'/>  //Caused hydration errors*/}
       <Head> 
        <title>SwearJar</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='keywords' content='nextjs, react, web apps, web site, programming, front end'/>

      </Head>

      <article className={articleStyles.article}>
      <div className="article-container">
      <h1 className={articleStyles.h1}> Building Swearjar website with Nextjs</h1>
        <p>Front-end website for production development testing.<span className={articleStyles.br}></span>
        My web developer portfolio.<span className={articleStyles.br}></span>
       <b>Server sponcership available with PayPal to have credits added to the website.</b></p>
        <span className={articleStyles.br}></span>
      
        <form action="https://www.paypal.com/donate" method="post" target="_top" >
          <input type="hidden" name="business" value="E2HRYJQA2AFBJ" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="item_name" value="Website donation to help pay for server running costs." />
          <input type="hidden" name="currency_code" value="AUD" />
          <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif" 
            border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="Donate" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />   
        </form>

        <span className="br"></span>
        <p><b>Cloud hosted on AWS (Amazon Web Services).</b><span className={articleStyles.br}></span>
        AWS Route 53 and S3 storage bucket used to run the stactic webpage.<span className={articleStyles.br}></span>
        Running on HTTPS (SSL) secure connection on port 443.<span className={articleStyles.br}></span>
        2022 will also see the website evolve with new software added.<span className={articleStyles.br}></span>
        <b> Click the cloud to visit AWS console.</b><span className={articleStyles.br}></span>
        <button className={articleStyles.button}><a href="http://www.aws.amazon.com/console" target="_blank" rel="noopener noreferrer">
        <Image className={articleStyles.awsLogo} src={awsLogo} alt="cloud" id="xs-cloud" height="48" width="48" /></a></button><span className={articleStyles.br}></span>
        <b>Working with all things JavaScript to understand Full Stack development</b><span className={articleStyles.br}></span>
        </p>
      </div>
    </article>


    <article className={articleStyles.article}>
      <div className="article-container">  
        <a className="a" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <Image className={articleStyles.reactLogo} src={reactLogo}  alt="React logo" height="64" width="64"/></a>               
        <p><b>Website running the React UI component library and Nextjs framework. Originally built with HTML, CSS(Flexbox) and JavaScript.</b>
        <span className={articleStyles.br}></span>
        Powered by the React/Nextjs. NodeJS(backend code) and MongoDB(database) software is in the development stage.<span className={articleStyles.br}></span>
        Test Rendering: SSR (Server-Side Rending), CSR (Client-Side Rendering) and Rehydration.
        <span className={articleStyles.br}></span>
        Performance Testing: TTFB (Time to First Byte), FP (First Paint) - any pixel become visible and 
        <span className={articleStyles.br}></span> TTI (Time To Interactive) - time at which page becomes interactive.</p>
        <p><b>Email and have a website built to your design requirements.</b><span className={articleStyles.br}></span>
        Website development lead times are 2 to 4 weeks for a basic static site. Fully custom website, 4 to 16 weeks.<span className={articleStyles.br}></span>
        Custom website involves a six stage proccess : Analysing requirements, Design, Revisions, 
        Development, Content and Migration/Go live.</p>
      </div>        
    </article>
    <div>
      <Image src={bne} id="bne" alt="Brisbane Christmas sunset" height="" width="" />
    </div>

    <hr className={articleStyles.hr}></hr>

    <article className={articleStyles.article}>
      <div className="article-container">
        <h2 className={articleStyles.h2}>Testing React/Nextjs and JavaScript via DOM</h2>
        <Image className="ball" src={ball8Logo}  alt="magic decision ball" height="64" width="64" />
        <h3 className="pBall, h3">Magic Decision ball</h3>
        <button className={articleStyles.button} id="magic" onClick={Magic}>Ask a question and click for an answer?</button> 

        <hr className={articleStyles.hr}></hr>

        <h3 className={articleStyles.h3}>Change background Colour</h3>
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
