import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';
import LifeCycle from './pages/LifeCycle/LifeCycle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BTChonXe from './pages/Hooks/BTChonXe';
import UseEffectHome from './pages/Hooks/UseEffectHome';
import ReduxHookHome from './pages/Hooks/ReduxHookHome';
import Details from './pages/Details/Details';
import UseCallBack from './pages/Hooks/UseCallBack';
import HookUseMemo from './pages/Hooks/HookUseMemo';
import UseRef from './pages/Hooks/UseRef';
import ParentComponent from './pages/HOC/ParentComponent';
import { HomeTemplate } from './templates/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Loading/>
      {/* <Header/> */}
      <Switch>
      <Route path='/' exact component={Home} />
      <HomeTemplate exact path='/home' Component={Home} />
      {/* <Route path='/home' exact component={Home} /> */}
      <Route path='/contact' exact component={Contact} />
      <AdminTemplate path='/login' exact Component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/lifecycle' exact render={(propsRoute) => { // tham số chứa các props của thẻ route 
        return <div>
          <h3>Component Lifecycle</h3>
          <LifeCycle {...propsRoute} />
        </div>
      }} />
      <Route path='/usestate' exact component={UseStateHook} />
      <Route path='/btusestate' exact component={BTChonXe} />
      <Route path='/useeffect' exact component={UseEffectHome} />
      <Route path='/reduxhook' exact component={ReduxHookHome} />
      <Route path='/details/:id' exact component={Details} />
      <Route path='/usecallback' exact component={UseCallBack} />
      <Route path='/usememo' exact component={HookUseMemo} />
      <Route path='/useref' exact component={UseRef} />
      <Route path='/demoprops' exact component={ParentComponent} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
