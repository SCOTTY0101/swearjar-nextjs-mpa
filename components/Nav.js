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
            <nav className='flex'>
              <Image  src={SJnavLogo} alt="sJs" width='24' height='16'/> 
                <ul 
                className='md:container h-20 justify-center inline-flex items-center'>            
                    <li className='items-center m-20'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='items-center m-20'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='items-center m-20'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className='items-center m-20'>
                        <Link href='/divPage'>Div</Link>
                    </li>
                    <li className='items-center m-20'>
                        <a href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedinLogo} alt="LinkedIn logo"/>
                        </a>
                    </li>
                    <li className='items-center m-20'>
                        <a href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                        <Image id="gitIcon" src={gitIogo} alt="github click link"/>
                        </a>
                    </li>

                </ul>
            </nav>                
        </div>
    )
}
