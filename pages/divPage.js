import Head from 'next/head'
import NavStyles from '../styles/Nav.module.css'

export default function divPage() {
    return (
        <div>
            <Head>
                <title>Div Page</title>
            </Head>
            <h1 className={NavStyles.centerDiv}>DIV</h1> 
            <p> &rarr; hire me &larr; </p>  
        </div>
    )
}



