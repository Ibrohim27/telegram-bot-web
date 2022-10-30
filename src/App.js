import { useEffect } from 'react';
import './App.css';
import useTelegram from './hooks/useTelegram';



function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App"> 
      <h1>Hello js</h1>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
    );
}

export default App;
