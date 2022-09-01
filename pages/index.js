import Head from 'next/head'
import Image from 'next/image'
import articleStyles from '../styles/Article.module.css'
import bne from '../public/Images/SouthBank30-12-21.jpeg'
import awsLogo from '../public/Images/cloud.svg'
import reactLogo from '../public/Images/reactImg.ico'
import ball8Logo from '../public/Images/ball.png'
import SJsponceLogo from '../public/Images/favicon-32x32.png'
//import colourBtn from './ColourBtn.js';
//import resetBtn from './RestBtn';
import Magic from '../pages/magicBall.ts'

//import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
       <Head> 
        <title>SwearJar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='keywords' content='nextjs, webapps, programming, front end'/>

      </Head>

      {/*<h1 className={articleStyles.hr}> Building swearjar website with nextjs</h1>*/}
      <article className={articleStyles.article}>
      <div className="article-container">
      <h1 className={articleStyles.h1}> Building swearjar website with nextjs</h1>
        <p>Front-End website for Development testing and Production.<span className="br"></span>
        Server sponcership available with PayPal to have company name added to the website credits.</p><span className={articleStyles.br}></span>
      
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
        <p>Cloud hosted, static website with AWS.<span className={articleStyles.br}></span>
        Running on HTTPS (SSL) secure connection on port 443.<span className={articleStyles.br}></span>
        2022 will also see the website evolve with new software added.<span className={articleStyles.br}></span>
        <b> Click the cloud to visit AWS console.</b><span className={articleStyles.br}></span>
        <button className={articleStyles.button}><a href="http://www.aws.amazon.com/console" target="_blank" rel="noopener noreferrer">
        <Image className={articleStyles.reactLogo} src={awsLogo} alt="cloud" id="xs-cloud" height="48" width="48" /></a></button><span className={articleStyles.br}></span>
        <b>Working with all things JavaScript to understand Full Stack development.</b><span className={articleStyles.br}></span>
        Incorporating the MERN stack into the website (MongoDB, Express, React, NodeJS) <span className={articleStyles.br}></span>
        and implementing Design Patterns in the JavaScript code. 
        </p>
      </div>
    </article>


    <article className={articleStyles.article}>
      <div className="article-container">                 
        <p><b>Website running the React UI component library. Originally built with HTML, CSS(Flexbox) and JavaScript.</b>
        <span className={articleStyles.br}>
          <br />
        <a className="a" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <Image className={articleStyles.reactLogo} src={reactLogo}  alt="logo" id="react-logo" height="64" width="64"/></a></span>
        Powered by the React. NodeJS(backend code) and MongoDB(database) software is in the development stage.<span className={articleStyles.br}></span>
        Building websites for mobile first to scale correctly.</p>
        <p>The {"Swear Jar"} name comes the challenges of chasing bugs and solving problems when writing code.</p>
        <p><b>Launching SwearJar Software in 2021/2022.</b><span className={articleStyles.br}></span>
        Programming development and refining of skills started in 2019. Monthly website updates will be pushed to the cloud.</p>
        <p><b>Email and have a website built to your design requirements.</b><span className={articleStyles.br}></span>
        Website development lead times are 2 to 4 weeks for a basic static site. Fully custom website, 4 to 16 weeks.<span className={articleStyles.br}></span>
        Custom website involves a six stage proccess : Analysing requirements, Design, Revisions, 
        Development, Content and Migration/Go live.</p>
      </div>        
    </article>
    <div>
      <Image src={bne} id="bne" alt="Brisbane Christmas sunset" />
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
        <button className={articleStyles.button} type="button" onClick={() => document.querySelector('body').style.backgroundColor = "#ADD8E6"}>Change colour</button>
        <button className={articleStyles.button} type="button" onClick={() => document.querySelector('body').style.backgroundColor = "#ffffff"}>Reset colour</button> 
      
      <h3 className={articleStyles.h3} id="sponcer">Sponsors & Website credits : <Image src={SJsponceLogo} alt="sJs" /></h3>
      </div>
    </article>

      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
  
}
