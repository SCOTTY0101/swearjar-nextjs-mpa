import Head from 'next/head'
import DivStyles from '../styles/blog.module.css'


export default function blog() {
    return (
       <div>
            <Head>
            <title>Blog Page</title>
            </Head>
            <h1 className={DivStyles.h1}>Swearjar Blog page.</h1>
            
            <article className={DivStyles.article}>
                <h3 className={DivStyles.h3}>Who am I and what do I do?</h3>
                <p>
                A self-taught, Front-end developer and work part-time on my own projects or Open Source.
                In 2018, I was working for a company and got interested in how hardware and software interact together. 
                That was an introduction to Arduino {"Uno's "} and The C language. 
                After six months of learning to code, I came across JavaScript, HTML and CSS. In 2019 I started writing Frontend code.
                </p>
                <br />
    
                <h3 className={DivStyles.h3}>Why do I code?</h3>
                <p>
                I am technically minded, and I prefer to keep my brain busy with problem solving.
                I enjoy the challenges of coding and writing software. 
                </p>
                <br />
            
                <h3 className={DivStyles.h3}>Why JavaScript?</h3>
                <p>
                {"It's"} relatively easy to learn and whither {"it's"} a good or bad a thing, but JavaScript is everywhere.
                Want to work Frontend with Web or Mobile {"App's"}?
                Try React and React Native.
                Need files or data to the client-side or servers? JSON.  Back-end code with {"API's"}? NodeJS.
                In need of data base storage, then try MongoDB.
                </p>
                <br />

                
                <h3 className={DivStyles.h3}>Why the name “SwearJar”?</h3>
                <p>
                If anyone has tried their hand at coding, it comes from the challenges of writing clean code, that is bug free and works.
                {" It's"} an ongoing journey of none stop learning....and filling up the swear jar!
               </p>
               </article>
        </div>
    
    )
}