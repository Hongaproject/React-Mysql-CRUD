import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

function BoardDetail () {

    const { idx } = useParams(); //  /detail/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
    const [boardDetail, setBoardDetail] = useState({});

    useEffect(() => {
        const getBoardDetail = () => {
            Axios.post(`http://localhost:8001/detail/${idx}`, {})
            .then((res) => {
                setBoardDetail(res.data[0]);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        };
        getBoardDetail();
        console.log(idx);
    }, []);

    return(
        <div>
            <div>
                <Link to={"/"}>게시판가기</Link>
            </div>
            <div>
                <div>
                    안녕하세요
                </div>
                <h3>번호 : {idx}</h3>
                <h2>제목 : {boardDetail.USER_TITLE} ({boardDetail.USERID_DATE})</h2>
                <h5>작성자 : {boardDetail.USER_ID}</h5>
                <p>내용 : {boardDetail.USER_CONTENT}</p>
                <button>수정</button>
            </div>
        </div>
    );
}

export default BoardDetail;