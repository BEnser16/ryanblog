import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/nav';
import About from './pages/about';
import Post from './pages/post';
import Project from './pages/project';
import Footer from './components/footer';
import Ch1 from './post/ch1';
import GitCommand from './post/GitCommand';
import DuckCoffeeIntro from './pages/DuckCoffeeIntro';
import FridgeAppIntro from './pages/FridgeAppIntro';
import ZooLinebot from './pages/ZooLinebot';
import PostView from './pages/PostView';


function App() {
  return (
    <>
      <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About/>} />
          
          <Route  path="/post" element={<Post/>} /> 
          <Route path="/post/ch1" element={<Ch1 />} />
          <Route path="/post/gitcommand" element={<GitCommand />} />
          <Route path="/post-view/:id" element={<PostView/>} />
          
          <Route path="/project" element={<Project/>} />
          <Route path="/project/duckcoffee" element={<DuckCoffeeIntro/>} />
          <Route path="/project/fridgecooker" element={<FridgeAppIntro/>} />
          <Route path="/project/zoolinebot" element={<ZooLinebot/>} />

        </Routes>
      <Footer />
      
    </>
    
    
    
  );
}

export default App;
