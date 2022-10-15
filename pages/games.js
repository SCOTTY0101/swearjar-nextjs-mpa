import Head from 'next/head'
import aboutStyles from '../styles/About.module.css'


export default function Games() {
    return (
        <div>
            <Head>
                <title>SwearJar Games</title>
            </Head>
            <article className={aboutStyles.article}>
                
                <div>Game page.</div>
            </article>            
        </div>
    )
}
 