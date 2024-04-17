
import '../css/abt.css'
import cl from '../assets/logo/tt.jpeg'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Contact = () => {
  return (
    <>
    <main className='c-main'>
      <div className="abt-page">
        <div className="up-txt">
          <h1 className="contact-txt">Feel free to contact me</h1>
        </div>
        <div className="logo-con">
          <img src={cl} alt="Techi Tuts Logo" className="logo-con" />
        </div>
        <div className="contact">
          <a href="" className="soc-link"><span className='con-icon'><AiFillInstagram className='soc-icon' size={50}  /></span></a>
          <a href="" className="soc-link"> <span className='con-icon'><AiFillLinkedin className='soc-icon' size={50} /></span> </a>
          <a href="" className="soc-link"><span className='con-icon'><AiFillGithub className='soc-icon' size={50} /></span> </a>
          <a href="" className="soc-link"> <span className='con-icon'><AiFillFacebook className='soc-icon' size={50} /></span></a>
        </div>
      </div>
    </main>
    </>
  )
}

export default Contact