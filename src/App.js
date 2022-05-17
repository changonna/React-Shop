import {useState} from "react";
import './App.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import img from './img/shoe.png';
import data from './data.js';
import Detail from './pages/Detail';
import {Event, One, Two} from './pages/Event';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

    // 1. 페이지 이동을 도와주는 useNavigate
    let navigate = useNavigate();

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className={""}>
            <Container>
                <Navbar.Brand>Shop</Navbar.Brand>
                <Nav className="me-auto">
                    {/* navigate(-1) : 뒤로가기 버튼
                        navigate(1) : 앞으로 가기 버튼 */}
                    <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
                    {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>

        {/*<Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link>*/}

        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/detail" element={Detail()} />
            <Route path="*" element={ <div>없는페이지에요</div> }/> {/* path에 *를 적으면 404 페이지가 만들어진다. */}

            <Route path="/about" element={<About/>}>
                <Route path="member" element={<Member/>} />
                <Route path="location" element={<Location/>} />
            </Route>

            <Route path="/event" element={<Event/>}>
                <Route path="one" element={<One/>}/>
                <Route path="two" element={<Two/>}/>
            </Route>
        </Routes>

        {/* html에서 src폴더의 이미지 넣을때는
            1. import
            2. style에 추가.           */}
        {/*<div className={"main-bg"} style={{ backgroundImage : 'url('+ img +')' }}></div>*/}

    </div>
  );
}

function About() {
    return (
        <div>
            <h4>회사정보</h4>
            <Outlet></Outlet>
        </div>
    )
}

function Member() {
    return (
        <div>
            <h4>멤버</h4>
        </div>
    )
}

function Location() {
    return (
        <div>
            <h4>위치정보</h4>
        </div>
    )
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
