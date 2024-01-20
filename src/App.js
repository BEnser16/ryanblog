import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/nav';
import About from './pages/about';
import Post from './pages/post';
import Project from './pages/project';


function App() {
  return (
    <>
      <NavBar/>
      
        <Routes>
          <Route path="/ryanblog/" element={<Home></Home>} />
          <Route path="/ryanblog/about" element={<About/>} />
          <Route path="/ryanblog/post" element={<Post/>} />
          <Route path="/ryanblog/project" element={<Project/>} />
        </Routes>
      
      
    </>
    
    
    
  );
}

export default App;
