//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gitIogo from '../public/Images/github.svg';
import linkedinLogo from '../public/Images/linkedin.svg';
import SJnavLogo from '../public/Images/favicon.ico';
import styles from '../styles/Nav.module.css'
import styleButton from '../styles/Article.module.css'


export default function Nav() {
    return (
        <div>
            <nav className={styles.nav}>
              <Image src={SJnavLogo} alt="sJs" width='32' height='32'/> 
                <ul>            
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/divPage'>Div</Link>
                    </li>
                    <li>
                        <a href="http://www.linkedin.com/in/alan-george-829706a3" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedinLogo} alt="LinkedIn logo"/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                        <Image id="gitIcon" src={gitIogo} alt="github click link"/>
                        </a>
                    </li>
                    <li>
                        <form>
                            <button className={styles.button}>Sign In</button>
                        </form>
                    </li>
                </ul>
            </nav>                
        </div>
    )
}
