//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gitIogo from '../public/Images/github.svg';
//import gitIogo from '../Assets/Images/github.svg';
import styles from '../styles/Nav.module.css'


export default function Nav() {
    return (
        <div>
            <nav className={styles.nav}>
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
                        <a href="http://www.github.com/SCOTTY0101" target="_blank" rel="noopener noreferrer">
                        <Image id="gitIcon" src={gitIogo} alt="github click link" width='32' height='32' />
                        </a>
                    </li>
                </ul>
            </nav>        
        
        </div>

    )
}