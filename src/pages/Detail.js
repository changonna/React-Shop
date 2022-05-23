import { useParams } from "react-router-dom";

const Detail = (props) => {

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
        1. styled-components 사용
        2. props 이용하여 컴포넌트 재활용
    // *   1. /detail/??로 들어오면 404 page로
    // *   2. data의 id값으로 이동하기.
    */

    return (
        <div className="container">
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

export default Detail;
