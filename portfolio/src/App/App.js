import Nav from '../Nav/Nav';
import Pages from '../Pages/Pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div>
          <Nav />
          <Pages />
        </div>
      </header>
    </div>
  );
}

export default App;
