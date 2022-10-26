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
            <nav className='container mx-auto flex flew-wrap justify-center items-center h-16  
            bg-gray-200 '>
             {/* <Image className='ml-4' src={SJnavLogo} alt="sJs" width='24' height='16'/> */}
                <div className='flex justify-start items-center h-16 w-16'>
                    <Image  src={SJnavLogo} alt="sJs" width='24' height='24'/>     
                </div>  
                <ul 
                className='flex flex-wrap justify-center items-center'>          
                    <li className='items-center mx-16 border-red-400 hover:underline'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='items-center mx-16 hover:underline'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='items-center  mx-16 hover:underline'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li className='items-center mx-16 hover:underline'>
                        <Link href='/divPage'>Div</Link>
                    </li>
                    <li className='items-center p-4 mx-16 hover:underline'>
                        <a className=' flex justify-center items-center hover:opacity-70'
                            href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedinLogo} alt="LinkedIn logo"/>
                        </a>
                    </li>
                    <li className='items-center p-4 mx-16'>
                        <a className='flex justify-center items-center hover:opacity-70'
                            href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                            <Image id="gitIcon" src={gitIogo} alt="github click link"/>
                        </a>
                    </li>

                </ul>
            </nav>                
        </div>
    )
}
