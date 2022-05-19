import React from 'react';
import logo from '../../resources/images/logo.png';
import './IntroductionPage.css';

const IntroductionPage = () =>{
    return (
        <div className='introduction_page_container'>
            <div className="introduction_page_panel">
                <img src={logo} alt="Logo" className="introduction_page_image" />
            </div>
        </div>
    )
}

export default IntroductionPage;