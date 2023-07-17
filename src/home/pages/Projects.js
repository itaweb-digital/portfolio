import '../home.css'
import confideinsProject from '../../imgs/confideinsProject.png'
import telebotLaptop from '../../imgs/telebotLaptop.png'

export default function Projects(language){
    const lang = language.language

    return (
        <div className="homePageSection" id="projects">
            <div className="visibleContent">
                <div className="contentGroup">
                    <div className='projectGroup'>
                        <div className='imageDiv'>
                            <img src={confideinsProject} id="confideinsProject"/>
                        </div>
                        <div className='textsDiv'>
                            <div className="textDivRow">
                                <h1 id="projectsHeader">{lang.SPAPage.projects.confideins.header}</h1>
                            </div>
                            <div className="paragraphDivRow">
                                <p id="projectsParagraph">{lang.SPAPage.projects.confideins.paragraph}</p>
                            </div>
                        </div>
                    </div>
                    <div className='projectGroup'>
                        <div className='imageDiv'>
                            <img src={telebotLaptop} id="confideinsProject"/>
                        </div>
                        <div className='textsDiv'>
                            <div className="textDivRow">
                                <h1 id="projectsHeader">{lang.SPAPage.projects.telebot.header}</h1>
                            </div>
                            <div className="paragraphDivRow">
                                <p id="projectsParagraph">{lang.SPAPage.projects.telebot.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}