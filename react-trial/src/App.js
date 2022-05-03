// import logo from './logo.svg';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import './styles.scss'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. 
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div class="mb-3">
    //       <label for="exampleFormControlInput1" class="form-label">Email address </label>
    //       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    //       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //     </div>
    //   </header>
    // </div>
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
