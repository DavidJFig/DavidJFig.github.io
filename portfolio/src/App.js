import './App.css';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import david from './david.jpg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <Header />
      <img src={david} className="App-logo" alt="Headshot Photo" />

      <AboutMe />
      

    </div> 

  );
}

export default App;
