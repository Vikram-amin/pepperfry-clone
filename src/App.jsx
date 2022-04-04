import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
