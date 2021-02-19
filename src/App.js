import './App.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app" >
      <BrowserRouter>
        <Home />

      </BrowserRouter>
    </div >
  );
}

export default App;
