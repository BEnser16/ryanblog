import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './font.css'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/ryanblog/">Ryan Dai</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/ryanblog/" className='ch-font' > 首頁</Nav.Link>
            <Nav.Link href="/ryanblog/about">關於作者</Nav.Link>
            <Nav.Link href="/ryanblog/post">文章分享</Nav.Link>
            <Nav.Link href="/ryanblog/project">開發作品</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;
