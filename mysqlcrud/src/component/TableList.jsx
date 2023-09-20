import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";  
import Contents from "./Contents";
import { useEffect, useState } from "react";

function TableList () {

    const [contents, setContents] = useState([]);

    useEffect(() => {
        const onSubmit = () => {
            Axios.get("http://localhost:8000/list", {})
            .then((res) => {
                setContents(res.data);
            })
            .catch(err => console.log(err))
        };
        onSubmit();
    }, [contents]);

    
    return(
        // 테이블 보여주는 컴포넌트 bootstrap사용하여 테이블 완성.
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // eslint-disable-next-line array-callback-return
                        contents.map((User) => {
                            return(
                                <Contents 
                                number={User.USER_NUMBER}
                                title={User.USER_TITLE}
                                userId={User.USER_ID}
                                userIdDate={User.USERID_DATE}
                                key={User.USER_NUMBER}
                                />
                            );
                        })};
                </tbody>
            </Table>
            <div className="text-center mb-3">
                <Button variant="success">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="warning">삭제하기</Button>
            </div>
        </div>
    );
}

export default TableList;