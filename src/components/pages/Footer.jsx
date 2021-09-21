import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <>
            <footer class="footer">
            <p class="footer__title">Firoj Ahmed</p>
            <div class="footer__social">
                <a href="https://www.facebook.com/firojahmed.srabon.7/" className="footer__icon"><FacebookIcon className='bx bxl-facebook' ></FacebookIcon></a>
                <a href="https://www.instagram.com/firojsrabon/" className="footer__icon"><InstagramIcon className='bx bxl-instagram' ></InstagramIcon></a>
                <a href="#" className="footer__icon"><TwitterIcon className='bx bxl-twitter' ></TwitterIcon></a>
                <a href="https://www.linkedin.com/in/firoj-ahmed-srabon-83543611b/" className="footer__icon"><LinkedInIcon className='bx bxl-twitter' ></LinkedInIcon></a>
            </div>
            <p class="footer_bottom">&#169; 2020 copyright all right reserved</p>
        </footer>
        </>
    )
}

export default Footer
