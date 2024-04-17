import React from 'react'
import al from '../../../../assets/logo/tt.jpeg'
import { NavLink } from 'react-router-dom';

const B1 = () => {
  return (
    <>
    <div className="container">
        <h1 className="title">How To Set Up React In Windows</h1>
        <div className="auth-time">         
            <div className="auther">
                <img src={al} alt="Techi Tuts logo" className="auth-img" />
                <h4 className="auth-name">Vishal Sing</h4>
                <div className="time">. Feb 28, 2024 </div>
            </div>
        </div>
        <div className="abt-blog">
            <p className="blog-contaxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa ipsum commodi iste cupiditate voluptatum nam, distinctio, corporis reprehenderit fugit fugiat a facere accusamus ducimus earum ipsam quaerat, consequuntur necessitatibus rem pariatur!</p>
        </div>
        <div className="read-btn">
           <NavLink to={'/b1'}><span className="rmore">Read more</span></NavLink>
        </div>
    </div>
    </>
  )
}

export default B1;