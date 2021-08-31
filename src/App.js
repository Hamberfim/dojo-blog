import './App.css';

function App() {
  // standard JS outside the the JSX template return
  const title = "Welcome to a Blog made using React 17";
  // react converts JS number, string and array datatypes to a string before output 
  let likes = 125;  // integer to string via React JSX template return
  // (But Not Booleans or Objects) i.e., 
  // let myObj = {name: 'Tom', age: 56};  // WILL ERROR OUT

  // html attributes as dynamic values
  const openTab =  "_blank";
  const myLink = "https://github.com/Hamberfim";


  // return the JSX template
  return (
    <div className="App">
        {/* 
          comments inside jsx must be surrounded with curly brackets
        */}

        <div className="content">
          <h1>{title}</h1>
          <p>Liked {likes} times</p>
          <p>{/* myObj */}</p>

          {/*  js staements that returns a vaild value (string, number, array)*/}
          <p>{"Your name here"}</p>
          <p>{625}</p>
          <p>{[5, 4, 3, 2, 1]}</p>
          <p>{"Random whole Number = " + (Math.random() * 100).toFixed(0)}</p>

          <a href={myLink} target={openTab}>My GitHub</a>

        </div>
    </div>
  );
}

export default App;
