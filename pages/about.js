import Head from 'next/head'
import articleStlye from '../styles/Article.module.css'


export default function About() {
    return (
        <div>
            <Head>
                <title>SwearJar About</title>
            </Head>
            <article className={articleStlye.article}>
                <h1>Second linked page on nextjs.</h1>
                <p> What SwearJar Software builds.</p> 
                <p>Re-building the website with Next.js and SSR (Server Side Rendering).</p>
                <p>Server to run on AWS EC2.</p>
            </article>
        </div>
    )
}

 