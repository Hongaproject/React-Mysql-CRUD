import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";
import Contents from "./Contents";

function TestList() {
    // 구조를 바꿔서 모드를 넣어 작성 수정 등을 해보려고 테스트 파일을 만듬.
    
    const [contents, setContents] = useState([]); // mysql은 테이블로 되어있어 배열로 받아야함. 화면에 보여주는 역할
    const [actionMode, setActionMode] = useState(0); // 모드를 적용하여 작성 및 수정 등을 하게 해줌.
    
    return(
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

export default TestList;