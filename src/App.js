import './App.css';
import Navbar from './Navbar';
import Home from './Home'

// root component of the application - component tree
function App() {
  // standard JS outside the the JSX template return
  
  // return the JSX template
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* page content */}
      <div className="content">
        <Home /> 
      </div>
    </div>
  );
}

export default App;
