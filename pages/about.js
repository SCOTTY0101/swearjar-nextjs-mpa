import Head from 'next/head'
import aboutStyles from '../styles/About.module.css'



export default function About() {
    return (
        <div>
            <Head>
                <title>SwearJar About</title>
            </Head>
            <article className={aboutStyles.article}>
                
                <h1>Second linked page using Nextjs.</h1>
                <p>What SwearJar Software builds.</p>
                <p>Re-building the website with Next.js and SSR (Server Side Rendering).</p>
                <p>Powered by Nextjs. The React framework for production.</p>
    
            </article>            
        </div>
    )
}
 