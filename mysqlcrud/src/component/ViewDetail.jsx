import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ViewDetail ({ list, onSubmit }) {
    // 게시판 제목을 누르면 내용이 보이게 해줌.

    return(
        <div>
            <Table>
                <tr>
                    <td>번호</td>
                    <td>{list.USER_NUMBER}</td>
                </tr>
                <tr>
                    <td>번호</td>
                    <td>{list.USER_TITLE}</td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>{list.USER_ID}</td>
                </tr>
                <tr>
                    <td>날짜</td>
                    <td>{list.USERID_DATE}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{list.USER_CONTENT}</td>
                </tr>
                <tr>
                    <td>
                        <Button variant="info" onClick={onSubmit}>글목록</Button>
                    </td>
                </tr>
            </Table>
        </div>
    );
}

export default ViewDetail;