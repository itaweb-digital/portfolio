import HeaderWelcomePage from '../header/Header'
import languages from '../languages.json'
import './welcome.css'
import rolematWelcomeIcon from '../imgs/rolematWelcomeIcon.svg'
import triangle from '../imgs/triangle.svg'
import cube from '../imgs/cube.svg'
import semiCircle from '../imgs/semiCircle.svg'
import rectangle from '../imgs/rectangle.svg'
import brasil from '../imgs/brasil.png'
import eua from '../imgs/eua.png'

function pause(ms){
    return new Promise((response)=>{return setTimeout(response, ms)})
}

export default function Welcome(props){
    const lang = props.language === 'portuguese' ? languages.portuguese : languages.english
    console.log('welcome')
    async function handleGoToHome(){
        let exploreButtonBorder = document.querySelector('#exploreButtonBorder')
        exploreButtonBorder.classList.add('exploreButtonBorderActived')
        let blackTransitionScreen = document.createElement('div')
        document.querySelector('.App').appendChild(blackTransitionScreen)
        blackTransitionScreen.classList.add('defaultBlackTransition')
        await pause(400)
        blackTransitionScreen.classList.add('activeTransition')
        await pause(1500)
        document.querySelector('#welcome').remove()
        blackTransitionScreen.classList.remove('activeTransition')
        await pause(600)
        blackTransitionScreen.remove()
    }
    function handleSetLangToPT(){
        props.setLanguage('portuguese')
    }
    function handleSetLangToEUA(){
        props.setLanguage('english')
    }

    return (
        <div id="welcome">
            <div id="welcomeGroup">
                <div id="welcomePageHeader">
                    <button
                    onClick={handleSetLangToPT}
                    id="brasilBtn"
                    className="langButton">
                        <img 
                        id="brasil"
                        src={brasil}/>
                    </button>
                    <img id="rolematIcon" src={rolematWelcomeIcon}/>
                    <button
                    onClick={handleSetLangToEUA}
                    id="euaBtn"
                    className="langButton">
                        <img 
                        id="eua"
                        src={eua}/>
                    </button>
                </div>
                <div id="welcomeContent">
                    <div className="visibleContent">
                        <div id="contentGroup">
                            <div id="textDivRow">
                                <h1 id="welcomeH1">{lang.initialHomePage.header.h1}</h1>
                                <h1 id="welcomeH2">{lang.initialHomePage.header.h2}</h1>
                            </div>
                            <div id="buttonDivRow">
                                <div id="exploreButtonBorder">
                                    <button id="exploreButton" onClick={handleGoToHome}>
                                        {lang.initialHomePage.button}
                                    </button>
                                </div>
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
                <h1 id="rolematLayer">Rolemat</h1>
            </div>
        </div>
    )
}