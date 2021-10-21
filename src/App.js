
import './App.css';
import { BrowserRouter as Router,Link} from 'react-router-dom';
import Routes from './Routes';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Link to="/">login</Link>        
        <Link to="/register">register</Link>
        <Link to="/perfil">perfil</Link>
        <Link to="/manager">manager</Link>
        <Link to="/library">library</Link>
        <Link to="/login">store</Link>
        <Link to="/description/0">description</Link>
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
