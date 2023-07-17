import './footer.css'
import arrowIconRight from '../imgs/arrowIconRight.svg'
import arrowIconLeft from '../imgs/arrowIconLeft.svg'

export default function Footer(index){
    
    function back(){
        if(index.index.pageIndex !== 1){
            index.index.setPageIndex(index.index.pageIndex - 1)
        }
    }
    function go(){
        if(index.index.pageIndex !== 4){
            index.index.setPageIndex(index.index.pageIndex + 1)
        }
    }

    return (
        <footer>
            <button onClick={back} className="arrowBtn">
                <img src={arrowIconLeft}
                className='arrowIcon arrowIconLeft'/>
            </button>
            <button onClick={go} className="arrowBtn">
                <img src={arrowIconRight}
                className='arrowIcon arrowIconRight'/>
            </button>
        </footer>
    )
}