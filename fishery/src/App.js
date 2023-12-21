// Importing CSS files and external libraries
import './App.css';
import 'process/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing React components for different pages
import Content from './componets/Content';
import Create from './componets/Create';
import Edit from './componets/Edit';
import Read from './componets/Read';

// Define the main App component
function App() {
  // Render the main structure of the application
  return ( 
    <BrowserRouter>
      <div className="App">
        {/* Header section with navigation bar */}
        <header className="App-header">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Fishery</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Create">Create</Nav.Link>
                <Nav.Link href="/Read">Read</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        {/* Define the routes for different pages */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/Read' element={<Read></Read>}></Route>
          <Route path='/Create' element={<Create></Create>}></Route>
          <Route path='/Edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
