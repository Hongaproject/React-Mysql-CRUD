import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";  
import Contents from "./Contents";
import { useEffect, useState } from "react";

function TableList () {

    const [contents, setContents] = useState([]); // mysql은 테이블로 되어있어 배열로 받아야함.

    useEffect(() => { // 서버에서 데이터를 받아와야해서 사용을 했습니다. 
        const onSubmit = () => {
            Axios.get("http://localhost:8000/list", {}) 
            .then((res) => {
                setContents(res.data);
            })
            .catch(err => console.log(err))
        };
        onSubmit();
    }, [contents]); // []에 값이 없으면 1번만 렌더링되기에 값이 불러오지지 않습니다.
    // 값을 넣어서 contents값이 수정이 될 때 마다 렌더링이 되기에 업데이트가 되는 모습을 확인 할 수 있습니다.

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
                            )
                        })}
                </tbody>
            </Table>
            <div className="text-center mb-3">
                <Button variant="success">글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
            </div>
        </div>
    );
}

export default TableList;