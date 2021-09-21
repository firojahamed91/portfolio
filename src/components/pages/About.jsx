import React from 'react'
import about from '../images/about.JPG'

const About = () => {
    return (
        <>
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src={about} alt=""/>
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">I'am Firoj Ahmed</h2>
                        <p class="about__text">
                            I am experiance with  
                            <ul>
                            <b>Fontend:</b>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>React.js</li>
                            </ul>
                            {/* HTML5, 
                            CSS3, 
                            Bootstrap, 
                            react.js and  */}
                            <ul>
                            <b>Backend:</b>
                                <li>PHP</li>
                                <li>mySQL database</li>
                            </ul>
                            
                            {/* backend: PHP, mySQL database and  */}
                            <ul>
                            <b>Vertion control:</b>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Gitlab</li>
                            </ul>
                            {/* vertion control: git, github, gitlab, and */}
                            <ul>
                            <b>Graphic Designe:</b>
                                <li>photoshop</li>
                                <li>illustrator</li>
                            </ul>
                            {/* graphic Designe with photoshop and illustrator.  */}

                            </p>           
                    </div>                                   
                </div>
            </section>
            <svg className="about_getwaves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="0.2" d="M0,32L40,53.3C80,75,160,117,240,165.3C320,213,400,267,480,272C560,277,640,235,720,186.7C800,139,880,85,960,58.7C1040,32,1120,32,1200,48C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg>
        </>
    )
}

export default About
