import './App.css';
import ChooseLanguage from '../chooseLanguage/ChooseLanguage';
import { useState } from 'react';
import Home from '../home/Home';
import Welcome from '../welcome/welcome';

function App() {
  const [language, setLanguage] = useState('portuguese')
  console.log('app')

  /*if(language === null){
    return (
      <div className="App">
        <ChooseLanguage setLanguage={setLanguage}/>
      </div>
    );*/

  return (
    <div className="App">
      <Welcome language={language} setLanguage={setLanguage} />
      <Home language={language} />
    </div>
  )
}

export default App;
