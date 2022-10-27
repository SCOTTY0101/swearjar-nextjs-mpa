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
            <nav className='bg-gray-200 shadow-lg'>
            <div className="container flex flex-wrap justify-between items-center mx-auto">

                <ul className='sm:self-center inline-flex'>  
                    <div className=''>
                        <Image  src={SJnavLogo} alt="sJs" width='24' height='24'/>     
                    </div>          
                    <li className=''>
                        <Link href='/' className=''>Home</Link>
                    </li>
                    <li className=''>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className=''>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className=''>
                        <Link href='/divPage'>Div</Link>
                    </li>
                    <li className=''>
                        <a className=''
                            href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinLogo} alt="LinkedIn logo"/>
                        </a>
                    </li>
                    <li className=''>
                        <a className=''
                            href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                            <Image id="gitIcon" src={gitIogo} alt="github click link"/>
                        </a>
                    </li>

                </ul>
            </div>
            </nav>                
        </div>
    )
}
