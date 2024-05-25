import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Productos from './Pages/Productos';
import Servicios from './Pages/Servicios';
import Inicio from './Pages/Inicio';
import Acerca from './Pages/Acerca';
import Blog from './Pages/Blog';
import FAQ from './Pages/FAQ';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>

          <Route path='/acerca' element={<Acerca/>}/>

          <Route path='/productos' element={<Productos/>}/>


          <Route path='/servicios' element={<Servicios/>}/>

          <Route path='/blog' element={<Blog/>}/>

          <Route path='/faq' element={<FAQ/>}/>
        </Routes>

        
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
