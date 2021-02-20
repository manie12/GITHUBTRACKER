import './App.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/CombineReducers';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

function App() {
  return (
    <div className="app" >
      <Provider store={store}>

        <BrowserRouter>

          <Home />

        </BrowserRouter>
      </Provider>

    </div >
  );
}

export default App;
