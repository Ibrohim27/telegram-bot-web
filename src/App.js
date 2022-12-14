import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';
import Header from './components/header/Header'


function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App"> 
      <Header/>
      <h1>Hello js</h1>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
    );
}

export default App;
