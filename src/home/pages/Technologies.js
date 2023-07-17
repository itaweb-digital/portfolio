import '../home.css'
import StackContainer from './components/StackContainer'

export default function Technologies(language){
    const lang = language.language

    return (
        <div className="homePageSection" id="technologies">
            <div className="visibleContent">
                <div className="contentGroup">
                <div className='technologiesGroup'>
                        <div className='textsDiv'>
                            <div className="textDivRow">
                                    <h1 id="technologiesHeader">{lang.SPAPage.techs.header}</h1>
                                </div>
                            <div className="paragraphDivRow">
                                <p id="technologiesParagraph">{lang.SPAPage.techs.paragraph.p1}</p>
                                <br/>
                                <br className='br2'/>
                                <p id="technologiesParagraph">{lang.SPAPage.techs.paragraph.p2}</p>
                            </div>
                        </div>
                        <div className="stacksDiv">
                            <StackContainer stack="React Native"/>
                            <StackContainer stack="Redux Toolkit"/>
                            <StackContainer stack="Typescript"/>
                            <StackContainer stack="Javascript"/>
                            <StackContainer stack="PHP"/>
                            <StackContainer stack="NodeJs"/>
                            <StackContainer stack="SQL"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}