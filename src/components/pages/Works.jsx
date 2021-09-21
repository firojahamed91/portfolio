import React from 'react'
import work1 from '../images/217-2171192_digital-competencies.jpg'
import work2 from '../images/how-to-become-a-web-developer.jpg'
import work3 from '../images/AdobeStock_214879686-scaled.jpeg'
import work4 from '../images/Web_development_-_Intro.png'
import work5 from '../images/digital-marketing-concept.jpg'
import work6 from '../images/3462522_Digital-Marketing-Trends-2021.jpg'

const Works = () => {
    return (
        <>
            <section className="work section" id="work">
                <h2 className="section-title">Work</h2>

                <div className="work__container bd-grid">
                    <div className="work__img">
                        <img src={work1} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={work2} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={work3} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={work4} alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={work5}alt=""/>
                    </div>
                    <div className="work__img">
                        <img src={work6} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works
