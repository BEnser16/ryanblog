import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/nav';
import About from './pages/about';
import Post from './pages/post';
import Project from './pages/project';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </Container>
      
    </>
    
    
    
  );
}

export default App;
