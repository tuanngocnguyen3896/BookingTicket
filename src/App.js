import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
