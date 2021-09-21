import React from 'react'
import {NavLink} from "react-router-dom"
import profile from "../images/profile.png"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Home = () => {
        return (
        <>
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Firoj Ahmed</span><br/> Web Designer <br/>and<br/> Graphic Desiner</h1>

                    <NavLink to='/contact' className="button">Contact</NavLink>
                </div>

                <div className="home__social">
                    <a href="https://www.facebook.com/firojahmed.srabon.7/" target="_blank" className="home__social-icon"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/firoj-ahmed-srabon-83543611b/" target="_blank" className="home__social-icon"><LinkedInIcon className="fab fa-facebook"></LinkedInIcon></a>
                    <a href="https://www.instagram.com/firojsrabon/" className="home__social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.instagram.com/firojsrabon/" className="home__social-icon"><TwitterIcon className="fab fa-instagram"></TwitterIcon></a>
                </div>

                <div className="home__img">    
                    <img src={profile} alt=""/>
                </div>
                
            </section>
            <svg className="getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="0.15" d="M0,96L13.3,122.7C26.7,149,53,203,80,208C106.7,213,133,171,160,144C186.7,117,213,107,240,128C266.7,149,293,203,320,229.3C346.7,256,373,256,400,229.3C426.7,203,453,149,480,128C506.7,107,533,117,560,106.7C586.7,96,613,64,640,96C666.7,128,693,224,720,250.7C746.7,277,773,235,800,197.3C826.7,160,853,128,880,122.7C906.7,117,933,139,960,154.7C986.7,171,1013,181,1040,186.7C1066.7,192,1093,192,1120,170.7C1146.7,149,1173,107,1200,128C1226.7,149,1253,235,1280,261.3C1306.7,288,1333,256,1360,256C1386.7,256,1413,288,1427,304L1440,320L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
</svg>
        </>
    )
}

export default Home
