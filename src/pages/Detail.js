import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import {Button} from "react-bootstrap";

let Btn = styled.button`
    background : ${ props => props.bg };    // bg라는 props를 사용할 수 있습니다. (props로 컴포넌트 재활용)
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

const Detail = (props) => {

    // mount, update시 코드 실행해주는 useEffect
    // useEffect 안에 있는 코드는 html 렌더링 후에 동작한다.
    useEffect(()=> {
        // console.log('안녕');
        for(let i=0; i<1000; i++) {
            console.log(1);
        }
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    });

    let [alert, setAlert] = useState(true);

    let [count, setCount] = useState(0);

    // :id 자리에 적은 값을 가져온다.
    let {id} = useParams();

    let shoe = props.shoes.find((element) => {
        return element.id == id;
    });


    if(shoe == undefined) {
        return (
            <div>없는페이지</div>
        );
    }


    /* TODO
    // *   1. /detail/??로 들어오면 404 page로
    */

    return (
        <div className="container">
            {
                alert ? <DivAlert/> : null
            }
            {count}
            <Button onClick={() => { setCount(count+1) }}>버튼</Button>
            <Btn bg="yellow">노란색버튼</Btn>
            <Btn bg="blue">파란색버튼</Btn>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (Number(shoe.id)+1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

let DivAlert = () => {
    return (
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div>
    );
}

export default Detail;
