import { useEffect, useState } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function BoardList () {

    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        const getBoardList = async () => {
                await Axios.get("http://localhost:8001/list", {})
                .then((res) => {
                    setBoardList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        };
        getBoardList();
    }, [boardList]);

    return(
        <div>
            <div>
                게시판 목록 입니다.
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((list)=> (
                            <tr key={list.USER_NUMBER}>
                                <td>{list.USER_NUMBER}</td>
                                <td>{list.USER_TITLE}</td>
                                <td>{list.USER_ID}</td>
                                <td>{list.USERID_DATE}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default BoardList;