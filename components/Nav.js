//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gitIogo from '../public/Images/github.svg';
import linkedinLogo from '../public/Images/linkedin.svg';
import SJnavLogo from '../public/Images/favicon.ico';
//import styles from '../styles/Nav.module.css'

//className={styles.nav}


export default function Nav() {
    return (
        <div>
            <nav className='flex  sm:md:lg:xl:2xl:containe w-screen'>
             {/* <Image className='ml-4' src={SJnavLogo} alt="sJs" width='24' height='16'/> */}
                <ul 
                className='sm:md:lg:xl:2xl:container h-8 m-4 justify-center inline-flex items-center'>
                    <div className='flex justify-center items-center  text-center'>
                    <Image  src={SJnavLogo} alt="sJs" width='24' height='24'/>     
                    </div>            
                    <li className='items-center mx-8'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='items-center mx-8'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='items-center mx-8'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className='items-center mx-8'>
                        <Link href='/divPage'>Div</Link>
                    </li>
                    <li className='items-center mx-8'>
                        <a className=' flex justify-center items-center  text-center'
                        href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedinLogo} alt="LinkedIn logo"/>
                        </a>
                    </li>
                    <li className='items-center mx-8'>
                        <a className=' flex justify-center items-center  text-center'
                        href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                        <Image id="gitIcon" src={gitIogo} alt="github click link"/>
                        </a>
                    </li>

                </ul>
            </nav>                
        </div>
    )
}
