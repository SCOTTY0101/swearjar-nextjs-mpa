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
            <nav className='w-full h-12 bg-sky-100 shadow-lg border-gray-400 border-b-2'>
            <div className="container flex flex-wrap h-12 justify-between items-center mx-auto">
                <div className='flex justify-center items-center'>
                    <Image  src={SJnavLogo} alt="sJs" width='24' height='24'/>     
                </div>

                <div>                 
                <ul className='self-center inline-flex '>  
                            
                    <li className='px-4 text-gray-700 hover:text-gray-500'>
                        <Link href='/' className=''>Home</Link>
                    </li>
                    <li className='px-4 text-gray-700 hover:text-gray-500'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className='px-4  text-gray-700 hover:text-gray-500'>
                        <Link href='/divPage'>Div</Link>
                    </li>
                    <li className='px-4 '>
                        <a className='flex justify-center items-center hover:opacity-50'
                            href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinLogo} alt="LinkedIn logo"/>
                        </a>
                    </li>
                    <li className='px-4'>
                        <a className='flex justify-center items-center hover:opacity-50'
                            href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                            <Image id="gitIcon" src={gitIogo} alt="github click link"/>
                        </a>
                    </li>

                </ul>
                </div>
            </div>
            </nav>                
        </div>
    )
}
