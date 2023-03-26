import { Navbar, Nav, Container } from "react-bootstrap";

const Layout = () => {

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><span className="text-decor">Pacific</span> Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="react-bs-navbar" />
                    <Navbar.Collapse id="react-bs-navbar">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/store">Shop</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto mb-2 mb-lg-0">
                            {/* Button shopping cart */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Layout;