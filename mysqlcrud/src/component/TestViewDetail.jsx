import { Table } from "react-bootstrap";

function TestViewDetail ({ list, onSubmit }) {
    // 게시판 제목을 누르면 내용이 보이게 해줌.

    return(
        <div>
            <Table>
                <tr>
                    <td>제목</td>
                </tr>
                <tr>
                    <td>작성자</td>
                </tr>
                <tr>
                    <td>날짜</td>
                </tr>
                <tr>
                    <td>내용</td>
                </tr>
                <tr>
                    <td>글목록</td>
                </tr>
            </Table>
        </div>
    );
}

export default TestViewDetail;