import React from 'react'
import '../css/main-cmp.css'
import t1 from '../assets/bg-images/bg2.jpeg'
import t2 from '../assets/bg-images/bg6.jpeg'
import t3 from '../assets/bg-images/bg8.jpeg'

import { AiFillInstagram, AiFillYoutube} from "react-icons/ai"

const Maincmp = () => {
  return (
    <>
    <main>
      <div className="top-intro-box">
        <div className="intro-txt-top">
          <h1 className="intro-txt">Welcome to <span className="tt-c">Techi Tuts</span></h1>
          {/* <h3 className="intro-txt-two">Make your Journey Easier</h3> */}
          <h1 className="intro-txt">Website for <span className="tt-c">Tech Lovers</span></h1>
        </div>
        <div className="top-cources">
        <div className="cource">
          <div className="t-cnt">
            <img src={t1} alt="" className="c-thumbill" />
          </div>
          <div className="b-cnt">
            <p className="free-pd">free course</p>
            <h2 className="course-name">Ultimate Prompting course</h2>
            <h4 className="summ">this is my course summart. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit et quasi commodi. Sequi saepe inventore veniam fugit iste ipsum eum sapiente doloremque earum? Nihil voluptas amet velit quo minus suscipit adipisci sed quis!</h4>
            <span className="start-wt">Start Watching</span>
          </div>
        </div>
        <div className="cource">
          <div className="t-cnt">
            <img src={t2} alt="" className="c-thumbill" />
          </div>
          <div className="b-cnt">
            <p className="free-pd">free course</p>
            <h2 className="course-name">Ultimate Prompting course</h2>
            <h4 className="summ">this is my course summart. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit et quasi commodi. Sequi saepe inventore veniam fugit iste ipsum eum sapiente doloremque earum? Nihil voluptas amet velit quo minus suscipit adipisci sed quis!</h4>
            <span className="start-wt">Start Watching</span>
          </div>
        </div>
        <div className="cource">
          <div className="t-cnt">
            <img src={t3} alt="" className="c-thumbill" />
          </div>
          <div className="b-cnt">
            <p className="free-pd">free course</p>
            <h2 className="course-name">Ultimate Prompting course</h2>
            <h4 className="summ">this is my course summart. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit et quasi commodi. Sequi saepe inventore veniam fugit iste ipsum eum sapiente doloremque earum? Nihil voluptas amet velit quo minus suscipit adipisci sed quis!</h4>
            <span className="start-wt">Start Watching</span>
          </div>
        </div>
      </div>
      <div className="exp-sug">
        <div className="sug-left">
          <h2 className="prompt">Learn <span className="clk-bt">Prompt Engineerig</span></h2>
        <h2 className="prompt">Learn to Use <span className="clk-bt">AI Tools</span></h2>
        <h2 className="prompt">Learn <span className="clk-bt">Web Development </span></h2>
        <h2 className="prompt">Learn How to use <span className="clk-bt"> AI in Coding </span></h2>
        <h2 className="prompt">Learn How to use<span className="clk-bt"> Projects </span></h2></div>
        <div className="sug-right">
        <ul className="ft-ul">
         <a href="https://www.youtube.com/@TechiTuts" className="soc-link"> <li className="ft-li"><AiFillInstagram className='soc-icon' size={50} /></li> </a>
         <a href="" className="soc-link"> <li className="ft-li"><AiFillYoutube className='soc-icon'   size={50}/></li> </a>
        </ul>
        </div>
      </div>
      </div>
    </main>
    </>
  )
}

export default Maincmp