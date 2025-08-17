import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I’m Vishveshvar—a full-stack developer with a builder’s mindset and a fresher’s hunger to learn. I specialize in crafting modern web applications using React.js for the frontend, FastAPI for the backend, and MySQL for data management. I love turning ideas into interactive, user-friendly experiences that feel smooth, look sharp, and work reliably.
</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack developer</h2>
                        <p>I build full-stack web apps that look sharp, run smooth, and solve real problems.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Developer</h2>
                        <p>I design, build, and deploy robust software solutions using Java, Spring Boot, and modern web technologies.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2> Web Developer</h2>
                        <p>I create dynamic websites and dashboards with modern web technologies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;