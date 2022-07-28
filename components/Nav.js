import React from 'react'

import styles from '../styles/Nav.module.css'


export default function Nav() {
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
            </nav>        
        
        </div>

    )
}