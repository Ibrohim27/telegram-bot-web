import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
    
    tg.MainButton.show();
  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      <h1>Hello js</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
    );
}

export default App;
