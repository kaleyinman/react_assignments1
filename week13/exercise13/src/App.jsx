import './css/app.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;