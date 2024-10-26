import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Hello World</h1>
      <p>This is my test React Component app</p>
      <img src={logo}/>
    </header>
);
}

function App() {
  return <Header />
}

export default App;