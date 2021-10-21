import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Menu from './components/menu/Menu';
function App() {
  
  return (
      <div className="App">
          <Router>
              <Menu/>
              <Routes/>
          </Router>
      </div>
  );
}

export default App;
