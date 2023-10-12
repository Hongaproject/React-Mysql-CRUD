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

    const onDelete = (e) => {
        Axios.post(`http://localhost:8001/delete/${idx}`, { 
        })
        .then((res) => {
            console.log(res);
            alert("게시글이 삭제되었습니다.")
            document.location.href = '/'
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className="text-center">
            <div className="mb-3">
                <Link to={"/"} className="text-decoration-none">게시판가기</Link>
                <button id={idx} onClick={onDelete} className="ms-2">삭제</button>
            </div>
            <div>
                <h3 className="mb-3">번호 : {idx}</h3>
                <h2>제목 : {boardDetail.USER_TITLE} ({boardDetail.USERID_DATE})</h2>
                <h5 className="mb-3">작성자 : {boardDetail.USER_ID}</h5>
                <p className="mb-3">내용 : {boardDetail.USER_CONTENT}</p>
                <button><Link to={`/update/${idx}`} className="text-decoration-none">수정</Link></button>
            </div>
        </div>
    );
}

export default BoardDetail;