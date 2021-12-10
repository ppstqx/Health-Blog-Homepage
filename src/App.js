import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Header from './components/Carousel1';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Footer />
    </div>
  );
}

export default App;
