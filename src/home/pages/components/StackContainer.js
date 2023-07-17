import reactNative from '../../../imgs/stacksIcons/reactNative.png'
import redux from '../../../imgs/stacksIcons/redux.png'
import typescript from '../../../imgs/stacksIcons/typescript.png'
import javascript from '../../../imgs/stacksIcons/javascript.png'
import php from '../../../imgs/stacksIcons/php.png'
import nodeJs from '../../../imgs/stacksIcons/nodeJs.png'
import sql from '../../../imgs/stacksIcons/sql.png'

export default function StackContainer(stack){

    switch(stack.stack){
        case "React Native":
            return (
                <div className="stackDiv">
                    <img className="stackIcon" 
                    id="reactNative"
                    src={reactNative}/>
                        <h2 className="stackTitle"
                        style={{color: '#61DAFB'}}
                        >
                        React Native
                        </h2>
                </div>
            )
        break;
        case "Redux Toolkit":
            return (
                <div className="stackDiv">
                    <img className="stackIcon" 
                    id="redux"
                    src={redux}/>
                        <h2 className="stackTitle"
                        style={{color: '#764ABC'}}
                        >
                        Redux Toolkit
                        </h2>
                </div>
            )
        break;
        case "Typescript":
            return (
                <div className="stackDiv">
                    <img className="stackIcon" src={typescript}/>
                    <h2 className="stackTitle"
                    style={{color: '#007AD2'}}
                    >
                    Typescript
                    </h2>
                </div>
            )
        break;
        case "Javascript":
            return (
                <div className="stackDiv">
                    <img className="stackIcon" src={javascript}/>
                    <h2 className="stackTitle"
                    style={{color: '#F7DF1E'}}
                    >
                    Javascript
                    </h2>
                </div>
            )
        break;
        case "PHP":
            return (
                <div className="stackDiv">
                    <img className="stackIcon" src={php}/>
                    <h2 className="stackTitle"
                    style={{color: '#4F5B93'}}
                    >
                    PHP</h2>
    
                </div>
            )
        break;
        case "NodeJs":
            return (
                <div className="stackDiv">
                    <img className="stackIcon"
                    id="node"
                    src={nodeJs}
                    />
                        <h2 className="stackTitle"
                        style={{color: '#8CC84B'}}
                        >
                        NodeJs
                        </h2>
                </div>
            )
        break;
        case "SQL":
            return (
                <div className="stackDiv">
                    <img className="stackIcon"
                    id="sql"
                    src={sql}
                    />
                        <h2 className="stackTitle"
                        style={{color: '#ffffff'}}
                        >
                        SQL Database
                        </h2>
                </div>
            )
        break;
    }
}