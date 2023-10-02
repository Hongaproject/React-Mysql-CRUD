import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";
import Update from "./Update";

function ViewDetail ({ list, setList, onSubmit, view, onView }) {
    // 게시판 제목을 누르면 내용이 보이게 해줌.

    const [update, setUpdate] = useState(false);

    const onUpdating = () => {
        setUpdate(!update);
    }

    const onDelete = (e) => { //삭제시 모드변경이 필요가 없기에 여기에 생성을해서 사용.
        Axios.post("http://localhost:8000/delete", { 
            number: e.target.id
        })
        .then(() => {
            onSubmit();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <div className="mt-3 mb-1">
                <Button onClick={() => onView(view)}>닫기</Button>
            </div>
            <div>작성자: {list.USER_ID} ({list.USERID_DATE})</div>
            <div>제목: {list.USER_TITLE}</div>
            <div>내용: {list.USER_CONTENT}</div>
            <div className="mt-1">
                <Button 
                    variant="danger"
                    id={list.USER_NUMBER}
                    onClick={onDelete}
                >삭제</Button>
                <Button 
                     variant="secondary" 
                    id={list.USER_NUMBER}
                    onClick={onUpdating}
                >수정</Button>
                {update === true ? (<Update list={list} onSubmit={onSubmit} setList={setList} update={update} onUpdating={onUpdating} />) : null}
            </div>
        </div>
    );
}

export default ViewDetail;