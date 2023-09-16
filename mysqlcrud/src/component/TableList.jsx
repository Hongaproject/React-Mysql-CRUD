import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";  

function TableList () {

    const onSubmit = () => {
        Axios.get("http://localhost:8000/", {}).then(() => {
            alert("등록 완료");
        });
    };
    
    return(
        // 테이블 보여주는 컴포넌트 bootstrap사용하여 테이블 완성.
        <div>
            <Table striped bordered hover>
                <col width="10%"/>
                <col width="10%"/>
                <col width="60%"/>
                <col width="10%"/>
                <col width="10%"/>
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
                    <tr>
                        <th><input type="checkbox" /></th>
                        <td>1</td>
                        <td>안녕하세요.</td>
                        <td>홍가</td>
                        <td>2023-09-11</td>
                    </tr>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <td>2</td>
                        <td>누구세요.</td>
                        <td>팬더</td>
                        <td>2023-09-13</td>
                    </tr>
                </tbody>
            </Table>
            <div className="text-center mb-3">
                <Button variant="success" onClick={onSubmit}>글쓰기</Button>
                <Button variant="secondary">수정하기</Button>
                <Button variant="warning">삭제하기</Button>
                <button variant="warning">삭제하기</button>
            </div>
        </div>
    );
}

export default TableList;