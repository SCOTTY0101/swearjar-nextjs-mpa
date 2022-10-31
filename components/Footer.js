import Image from "next/image"
import footerStyle from '../styles/Footer.module.css'
import gitLogo from '../public/Images/github.svg'
import SJnavLogo from '../public/Images/favicon.ico'


export default function footer() {

  return (
    <div className=" w-full shadow">
      <footer className=' bg-gray-300 text-center flex justify-center'>
        <div className="">
        <p className=''>Click the GitHub icon to view code.</p>
          <a className='' href="http://www.github.com/SCOTTY0101/swearjar-nextjs-mpa" target="_blank" rel="noopener noreferrer">
            <Image  src={gitLogo} alt="github click link" height='32' width='32'/></a>
          <div className=''>
            <p> &copy; SwearJarSoftware 2019-2022.
              <Image className={footerStyle.sjLogo} src={SJnavLogo} alt="sJs" width='16' height='16'/> 
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
