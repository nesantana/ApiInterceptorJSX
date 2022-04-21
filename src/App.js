import logo from './logo.svg';
import './App.css';
import { ApiInterceptor } from './Components/ApiInterceptor';

function App() {
  return (
    <>
      {/* You need to include your component of ApiInterceptor here or in your first page */}
      <ApiInterceptor />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
