import Masthead from './Masthead';
import Navbar from './Navbar';
import Home from './Home'

// root component of the application - component tree
function App() {
  // standard JS outside the the JSX template return
  
  // return the JSX template
  return (
    <div className="App">
      {/* masthead area */}
      <Masthead />
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

// https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
// next video is #8: https://youtu.be/4pO-HcG2igk?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d