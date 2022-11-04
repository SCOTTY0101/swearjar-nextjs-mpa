import Head from 'next/head'
import DivStyles from '../styles/blog.module.css'


export default function blog() {
    return (
       <div>
            <Head>
            <title>Blog Page</title>
            </Head> 
            <div className='h-screen  bg-slate-200'>
              <h1 className='flex justify-center items-center text-4xl py-2 min-w-min'>Swearjar Blog Page</h1>
                
                    <article className='grid grid-cols-2  grid-rows-2 gap-4 p-4'>

                        <div className='bg-yellow-100  rounded-md '>
                        <h3 className='font-bold underline p-2'>Who am I and what do I do?</h3>
                        <p className='p-2'>
                        A self-taught, Front-end developer and work part-time on my own projects or Open Source.
                        In 2018, I was working for a company and got interested in how hardware and software interact together. 
                        That was an introduction to Arduino {"Uno's "} and The C language. 
                        After six months of learning to code, I came across JavaScript, HTML and CSS. In 2019 I started writing Front-end code.
                        </p>
                        </div>
                       
                        <div className='bg-sky-100 rounded-lg'>
                        <h3 className='font-bold underline p-2'>Why do I code?</h3>
                        <p className='p-2'>
                        I am technically minded, and I prefer to keep my brain busy with problem solving.
                        I enjoy the challenges of coding and writing software. 
                        </p>
                        </div>

                        <div className='bg-sky-100 rounded-lg'>
                        <h3 className='font-bold underline p-2'>Why JavaScript?</h3>
                        <p className='p-2'>
                        {"It's"} relatively easy to learn and whither {"it's"} a good or bad a thing, but JavaScript is everywhere.
                        Want to work Frontend with Web or Mobile {"App's"}?
                        Try React and React Native.
                        Need files or data to the client-side or servers? JSON.  Back-end code with {"API's"}? NodeJS.
                        In need of data base storage, then try MongoDB.
                        </p>
                        </div>
                        
                        <div className='bg-yellow-100 rounded-md'>
                        <h3 className='font-bold underline p-2'>Why the name “SwearJar”?</h3>
                        <p className='p-2'>
                        If anyone has tried their hand at coding, it comes from the challenges of writing clean code, that is bug free and works.
                        {" It's"} an ongoing journey of none stop learning....and filling up the swear jar!
                        </p>
                        </div>
                    </article>
                   
               </div>
        </div>
    
    )
}