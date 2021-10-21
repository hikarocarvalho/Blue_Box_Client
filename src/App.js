import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import GuardedLinks from './components/GuardedLinks/GuardedLinks';
function App() {
  
  return (
    <div className="App">
      
      <Router>
        <nav className='menu'>
          <GuardedLinks to="/">Store</GuardedLinks>        
          <GuardedLinks to="/register">Register</GuardedLinks>
          <GuardedLinks to="/perfil">Profiles</GuardedLinks>
          <GuardedLinks to="/manager">Manager</GuardedLinks>
          <GuardedLinks to="/library">Library</GuardedLinks>
          <GuardedLinks to="/login">Login</GuardedLinks>
          <GuardedLinks to="/logout">Logout</GuardedLinks>
        </nav>
        
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
