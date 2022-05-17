import {Outlet} from "react-router-dom"

const Event = () => {
    return (
        <div>
            <h3>오늘의 이벤트</h3>
            <Outlet></Outlet>
        </div>
    )
}

function One() {
    return (
        <div>
            <h4>첫 주문시 양배추즙 서비스</h4>
        </div>
    )
}

function Two() {
    return (
        <div>
            <h4>생일기념 쿠폰받기</h4>
        </div>
    )
}

export {Event, One, Two};