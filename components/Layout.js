//import React from 'react'
import Nav from './Nav';
import Footer from './Footer'
import styles from '../styles/Home.module.css';

const layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div> 
        <Footer />
        </>
    )
}

export default layout