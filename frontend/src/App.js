import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-gray-900 text-white">
        <h1 className="text-3xl font-bold p-4">Welcome to CodeMaster!</h1>
        <CodeEditor />
      </div>
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
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));