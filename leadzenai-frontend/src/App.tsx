import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';

function App() {
  return (<>
    <Header />
    <div className="app">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<UserDetails />} />
        </Routes>
      </Provider>
    </div>
  </>
  )
}

export default App
