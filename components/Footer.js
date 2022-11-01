import Image from "next/image"
import footerStyle from '../styles/Footer.module.css'
import gitLogo from '../public/Images/github.svg'
import SJnavLogo from '../public/Images/favicon.ico'


export default function footer() {

  return (
    <div className=" w-full">
      <footer className=' bg-gray-300 text-center flex justify-center'>
        <div>

          <p className='text-base pt-2'>Click the GitHub icon to view code.</p>
            <a className='m-2 flex justify-center items-center' href="http://www.github.com/SCOTTY0101/swearjar-nextjs-mpa" target="_blank" rel="noopener noreferrer">
              <Image  src={gitLogo} alt="github click link" height='24' width='24'/>
            </a>
          <div className='flex pb-2'>
            <p className="text-base px-6"> &copy; SwearJarSoftware 2019-2022. </p>
              <Image className={footerStyle.sjLogo} src={SJnavLogo} alt="sJs" width='16' height='16'/>  
          </div>

        </div>
      </footer>
    </div>
  )
}
