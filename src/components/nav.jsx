import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './font.css'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Ryan Dai</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className='ch-font' > 首頁</Nav.Link>
            <Nav.Link href="/about">關於作者</Nav.Link>
            <Nav.Link href="/post">文章分享</Nav.Link>
            <Nav.Link href="/project">開發作品</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;
