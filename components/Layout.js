//import React from 'react'
import styles from '../styles/Home.module.css'

const layout = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1>This text shows up on all pages.</h1>
                {children}
            </main>
        </div> 
    )
}

export default layout