import {useState} from "react";
import './App.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import img from './img/shoe.png';
import data from './data.js';

function App() {
    let [modal, setModal] = useState(false);

    let [shoes] = useState(data);

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" className={""}>
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                    {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>

        {/* html에서 src폴더의 이미지 넣을때는
            1. import
            2. style에 추가.           */}
        {/*<div className={"main-bg"} style={{ backgroundImage : 'url('+ img +')' }}></div>*/}

        <div className={"main-bg"}></div>

        <div className="container">
            <div className="row align-items-center">
                {
                    shoes.map(function(data, i) {
                        return (
                            <Modal shoe={data} i={i}></Modal>
                        )
                    })
                }
                {/*<div className="col">
                     public 폴더 이미지 쓰는 권장방식
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} style={{width : "80%"}}/>

                    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} style={{width : "80%"}}/>
                    <h4>{shoes[0].title}</h4>
                    <p>{shoes[0].content}</p>
                    <p>{shoes[0].price}</p>
                </div>
                <div className="col">
                    <img src={"https://codingapple1.github.io/shop/shoes2.jpg"} style={{width : "80%"}}/>
                    <h4>{shoes[1].title}</h4>
                    <p>{shoes[1].content}</p>
                    <p>{shoes[1].price}</p>
                </div>
                <div className="col">
                    <img src={"https://codingapple1.github.io/shop/shoes3.jpg"} style={{width : "80%"}}/>
                    <h4>{shoes[2].title}</h4>
                    <p>{shoes[2].content}</p>
                    <p>{shoes[2].price}</p>
                </div>*/}
            </div>
        </div>

    </div>
  );
}

const Modal = (props) => {
    return (
        <div className="col">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} style={{width : "80%"}}/>
            <h4>{props.shoe.title}</h4>
            <p>{props.shoe.content}</p>
            <p>{props.shoe.price}</p>
        </div>
    );
}

export default App;
