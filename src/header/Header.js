import languages from '../languages.json'
import './header.css'
import rolematIcon from '../imgs/rolematIcon.svg'
import arrowIconRight from '../imgs/arrowIconRight.svg'
import arrowIconLeft from '../imgs/arrowIconLeft.svg'

export default function Header(props){
    const lang = props.language
    const page1 = document.querySelector('#page1')
    const page2 = document.querySelector('#page2')
    const page3 = document.querySelector('#page3')
    const page4 = document.querySelector('#page4')

    function goToWhoAreUs(){
        props.index.setPageIndex(1)
    }
    function goToProducts(){
        props.index.setPageIndex(2)
    }
    function goToTechnologies(){
        props.index.setPageIndex(3)
    }
    function goToContact(){
        props.index.setPageIndex(4)
    }
    function back(){
        if(props.index.pageIndex !== 1){
        props.index.setPageIndex(props.index.pageIndex - 1)
        }
    }
    function go(){
        if(props.index.pageIndex !== 4){
        props.index.setPageIndex(props.index.pageIndex + 1)
        }
    }

    switch(props.index.pageIndex){
        case 1:
            page1.classList.add('active');
            page2.classList.remove('active')
            page3.classList.remove('active')
            page4.classList.remove('active')
            break;
        case 2:
            page1.classList.remove('active');
            page2.classList.add('active')
            page3.classList.remove('active')
            page4.classList.remove('active')
            break;
        case 3:
            page1.classList.remove('active');
            page2.classList.remove('active')
            page3.classList.add('active')
            page4.classList.remove('active')
            break;
        case 4:
            page1.classList.remove('active');
            page2.classList.remove('active')
            page3.classList.remove('active')
            page4.classList.add('active')
            break;
    }
    return (
        <header>
            <p onClick={goToWhoAreUs} className='pageMenuItem' id="page1">{lang.menu.page1}</p>
            <p onClick={goToProducts} className='pageMenuItem' id="page2">{lang.menu.page2}</p>
            <button onClick={back} className="arrowBtn"><img src={arrowIconLeft} className='arrowIcon arrowIconLeft'/></button>
            <img id="rolematIcon" src={rolematIcon}/>
            <button onClick={go} className="arrowBtn"><img src={arrowIconRight} className='arrowIcon arrowIconRight'/></button>
            <p onClick={goToTechnologies} className='pageMenuItem' id="page3">{lang.menu.page3}</p>
            <p onClick={goToContact} className='pageMenuItem' id="page4">{lang.menu.page4}</p>
        </header>
    )
}