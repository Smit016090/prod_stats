// import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar title={`System Stats Calculator`} />
      <Calculator/>
    </div>
  );
}

export default App;
