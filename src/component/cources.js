import '../css/cources.css'
import '../css/main-cmp.css'
import {Krs} from '../dbCmp/Krs'


const cources = () => {
  return (
    <>
      <main>
        <div className="cr-page">
          <div className="crs-refrences">
            <h1 className="crs-head">Top Free Cources Across the Internet to Learn</h1>
            <h3 className="crs-ref">Find top Free Tech Cources Acress the Interner.</h3>
          </div>
          <div className="top-cources">
            {
             Krs && Krs.map((value )=>{
              return<>
                <div className="cource">
                <div className="t-cnt">
                  <img src={value.imageUrl} alt={value.Title} className="c-thumbill" />
                </div>
                <div className="b-cnt">
                  <p className="free-pd">{(value.isPaid)? "Paid" : "Free"}</p>
                  <h2 className="course-name">{value.Title}</h2>
                  <p className="free-pd mc">{value.MainCat}</p>
                  <div className="cno-of"><h4 className="summ">{value.context}</h4></div>
                  <h4 className="addi">{value.additional}<span>{" "}{value.Language}</span> </h4>
                  <a href={value.Link}><span className="start-wt">Start Watching</span></a>
                </div>
              </div>
              </>
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default cources;