import '../home.css'

export default function WhoAreUs(language){
    const lang = language.language

    return (
        <div className="homePageSection" id="whoAreUs">
            <div className="visibleContent">
                <div className="contentGroup">
                    <div className="textDivRow">
                        <h1>{lang.SPAPage.whoAreU.header}</h1>
                    </div>
                    <div className="paragraphDivRow">
                        <p>{lang.SPAPage.whoAreU.paragraph.p1}</p>
                        <br/>
                        <br className='br2'/>
                        <p>{lang.SPAPage.whoAreU.paragraph.p2}</p>
                        <br/>
                        <br className='br2'/>
                        <p>{lang.SPAPage.whoAreU.paragraph.p3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}