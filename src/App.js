import logo from './logo.svg';
import './main.css';
import Header from './components/header.jsx'
import Main from './components/main';
import {Footer} from './components/footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
