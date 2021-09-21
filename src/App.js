import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import './components/pages/style.scss'
import MyFile from './components/MyFile';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Works from './components/pages/Works';
import Footer from './components/pages/Footer';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import MyRouter from './components/MyRouter';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      <MyFile/> */}
      <MyRouter/>
    </div>
  );
}

export default App;
