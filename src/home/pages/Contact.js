import '../home.css'
import linkedinIcon from '../../imgs/thinLinkedinIcon.svg'
import instagramIcon from '../../imgs/thinInstagramIcon.svg'
import profileIcon from '../../imgs/profileIcon.png'
import triangle from '../../imgs/triangle.svg'
import cube from '../../imgs/cube.svg'
import semiCircle from '../../imgs/semiCircle.svg'
import rectangle from '../../imgs/rectangle.svg'

/*export default function Contact(language){
    const lang = language.language

    return (
        <div className="homePageSection" id="contact">
            <div className="visibleContent">
                <div className="contentGroup">
                    <form id="contactForm">
                        <input 
                        placeholder={lang.SPAPage.contact.name}
                        id="nameInput"/>
                        <input 
                        placeholder={lang.SPAPage.contact.email}
                        id="emailInput"/>
                        <textarea 
                        placeholder={lang.SPAPage.contact.message}
                        id="messageInput"/>
                        <div id="formButtons">
                            <button id="sendInput">
                                {lang.SPAPage.contact.send}
                            </button>
                            <button id="linkedinBtn">
                                <img src={linkedinIcon}/>
                            </button>
                            <button id="instagramBtn">
                                <img src={instagramIcon}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}*/

export default function Contact(language){
    const lang = language.language

    function openLinkedin(){
        window.open('https://www.linkedin.com/in/nelson-eder-538a96216/')
    }
    function openInstagram(){
        window.open('https://instagram.com/rolemat')
    }

    return (
        <div className="homePageSection" id="contact">
            <div className="visibleContent">
                <div className="contentGroup">
                    <div id="profileContact">
                        <div id="profileDivRow">
                            <div id="profileImgDiv">
                                <img 
                                id="profileIcon"
                                src={profileIcon}/>
                            </div>
                            <div id="profileInfosDiv">
                                <h1>Nelson Eder</h1>
                                <p>{lang.SPAPage.contact.aboutMe}</p>
                            </div>
                        </div>
                        <div id="profileButtonsDivRow">
                            <button
                            onClick={openLinkedin}>
                                <img src={linkedinIcon}/>
                                <p>Linkedin</p>
                            </button>
                            <button
                            onClick={openInstagram}>
                            <img src={instagramIcon}/>
                                <p>Instagram</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img 
            className='shape'
            id="triangle"
            src={triangle}/>
            <img 
            className='shape'
            id="cube"
            src={cube}/>
            <img 
            className='shape'
            id="semiCircle"
            src={semiCircle}/>
            <img 
            className='shape'
            id="rectangle"
            src={rectangle}/>
        </div>
    )
}