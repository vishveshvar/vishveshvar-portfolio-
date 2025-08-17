import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1k0qmya', 'template_vrxzf4u', form.current, 'lN5wzbYBm-PDcTzl4')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Where You’ll Find Me</h1>
                <span className="clientDesc">
                   Check out my code, projects, and professional updates
                </span>
                <div className="clientImgs">
                <a href="https://github.com/vishveshvar" target="_blank" rel="noopener noreferrer">
                    <img src={Walmart} alt="Client" className="clientImg" />
                </a>

                <a href="https://www.linkedin.com/in/vishveshvar-k-99183b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <img src={Adobe} alt="Client" className="clientImg" />
                </a>

                <a href="https://leetcode.com/vishveshvar/" target="_blank" rel="noopener noreferrer">
                    <img src={Microsoft} alt="Client" className="clientImg" />
                </a>

                <a href="https://www.facebook.com/share/1N7ug9k23r/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Client" className="clientImg" />  
                </a>
                 
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;