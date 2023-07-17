import brasil from '../imgs/brasil.png'
import eua from '../imgs/eua.png'
import './chooseLang.css'

export default function ChooseLanguage(setLanguage){
    function handleSetLanguageToEN(){
        exitAnimation()
        setLanguage.setLanguage('english')
    }
    function handleSetLanguageToPT(){
        setLanguage.setLanguage('portuguese')
    }
    return (
        <div id="chooseLanguagePage">
            <div id="chooseLanguageGroup">
                <div className='textDivRow'>
                    <h1>Choose Your Language.</h1>
                </div>
                <div className='imagesDivRow'>              
                    <button 
                    onClick={handleSetLanguageToPT} 
                    id="portugueseLanguage">
                        <img width={171} height={106} src={brasil} alt="Portuguese"/>
                    </button>
                    <button 
                    onClick={handleSetLanguageToEN} 
                    id="englishLanguage">
                        <img width={171} height={106} src={eua} alt="English"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

function exitAnimation(){
    const target = document.querySelector('#chooseLanguagePage')
    target.style.animation = "pageExit 3s"
}