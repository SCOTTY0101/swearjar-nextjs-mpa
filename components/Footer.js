import Image from "next/image"
import footerStyle from '../styles/Footer.module.css'
import gitIogo from '../public/Images/github.svg';


export default function footer() {

  return (
      <footer className={footerStyle.footer}>
        <p className={footerStyle.p}>Click GitHub icon to view code.</p>
        <a className={footerStyle.a} href="http://www.github.com/SCOTTY0101/swearjar-nextjs-mpa" target="_blank" rel="noopener noreferrer">
        <Image id="gitIogo" src={gitIogo} alt="github click link" height='32' width='32'/></a>
        <p className={footerStyle.p}> &copy; SwearJarSoftware 2019-2022</p>
      </footer>
  )
}