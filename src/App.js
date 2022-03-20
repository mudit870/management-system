import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Job from './components/Job';
import Feed from './components/Feed';
import Form from './components/Form';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div className="app">
        <Header />
        <div className='app_body'>
          <Job />
          <br/>
          <Form />
          <br/>
          <Feed /> 
        </div>  
        {/* <Router>
          <Route exact path='/' component={Signup} />
          <Route exact path='/home' component={Home} />
        </Router> */}
    </div>
  );
}

export default App;
