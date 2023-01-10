import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Header header = "The many reviews of NC's games"></Header>
      <Display></Display>
    </div>
  );
}

export default App;
