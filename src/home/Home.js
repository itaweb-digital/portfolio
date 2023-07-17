import { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import languages from '../languages.json'
import './home.css'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Technologies from './pages/Technologies'
import WhoAreUs from './pages/WhoAreUs'

export default function Home(language){
    const [pageIndex, setPageIndex] = useState(0)
    const lang = language.language === 'portuguese' ? languages.portuguese : languages.english
    const whoAreUs = document.querySelector('#whoAreUs')
    const projects = document.querySelector('#projects')
    const technologies = document.querySelector('#technologies')
    const contact = document.querySelector('#contact')

    if(pageIndex > 4){
        console.log('ERROR: the pageIndex not have more than 4 index. The PageIndex has changed to 1.')
        setPageIndex(1)
    }
    if(pageIndex !== 1){
        let arrowIcon = document.querySelectorAll('.arrowIconLeft');
        arrowIcon.forEach((it) => {
            it.classList.remove('disabled')
        })
    }
    if(pageIndex === 1){
        let arrowIcon = document.querySelectorAll('.arrowIconLeft');
        arrowIcon.forEach((it) => {
            it.classList.add('disabled')
        })
    }
    if(pageIndex !== 4){
        let arrowIcon = document.querySelectorAll('.arrowIconRight');
        arrowIcon.forEach((it) => {
            it.classList.remove('disabled')
        })
    }
    if(pageIndex === 4){
        let arrowIcon = document.querySelectorAll('.arrowIconRight');
        arrowIcon.forEach((it) => {
            it.classList.add('disabled')
        })
    }

    switch(pageIndex){
        case 1:
            whoAreUs.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            break;
        case 2:
            projects.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            break;
        case 3:
            technologies.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            break;
        case 4:
            contact.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            break;
    }

    useEffect(()=>{
        if(pageIndex === 0){
            setPageIndex(1)
        }
    }, [])

    return (
        <div id="homePage">
            <Header language={lang} index={{pageIndex, setPageIndex}}/>
            <scrollabe>
                <WhoAreUs language={lang}   index={pageIndex}/>
                <Projects language={lang}   index={pageIndex}/>
                <Technologies language={lang}   index={pageIndex}/>
                <Contact language={lang}    index={pageIndex}/>
            </scrollabe>
            <Footer language={lang} index={{pageIndex, setPageIndex}}/>
        </div>
    )
}