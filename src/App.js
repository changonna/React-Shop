import {useState} from "react";
import './App.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import img from './img/shoe.png';
import data from './data.js';
import detail from './detail';
import { Routes, Route, Link} from 'react-router-dom'

function App() {


  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className={""}>
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/detail">Detail</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>

        {/*<Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>*/}

        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/detail" element={detail()} />
        </Routes>

        {/* html에서 src폴더의 이미지 넣을때는
            1. import
            2. style에 추가.           */}
        {/*<div className={"main-bg"} style={{ backgroundImage : 'url('+ img +')' }}></div>*/}

    </div>
  );
}

const Main = () => {
    // let [modal, setModal] = useState(false);

    let [shoes] = useState(data);

    return (
        <>
            <div className={"main-bg"}></div>
            <div className="container">
                <div className="row align-items-center">
                    {
                        shoes.map(function(data, i) {
                            return (
                                <Modal key={data.id} shoe={data} i={i}></Modal>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

const Modal = (props) => {
    return (
        // <Link to="/detail">
            <div className="col">
                <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} style={{width : "80%"}}/>
                <h4>{props.shoe.title}</h4>
                <p>{props.shoe.content}</p>
                <p>{props.shoe.price}</p>
            </div>
        // </Link>
    );
}

export default App;
