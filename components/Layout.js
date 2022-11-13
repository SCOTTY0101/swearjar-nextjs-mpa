import Nav from './Nav'
import Footer from './Footer'
//import styles from '../styles/Home.module.css'
//import Time from '../pages/dateTime.js'

const layout = ({children}) => {
    return (
        <div>
        <Nav />
            <div className=''>
                <main className=''>
                    {children}
                </main>
            </div>
        <Footer />
        </div>
    )
}

export default layout
