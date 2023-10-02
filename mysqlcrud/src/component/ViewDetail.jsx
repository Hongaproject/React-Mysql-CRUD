import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";

function ViewDetail ({ list, onSubmit, viewDetailUpdate}) {
    // 게시판 제목을 누르면 내용이 보이게 해줌.

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
                        <Button 
                            variant="secondary" 
                            id={list.USER_NUMBER}
                            onClick={viewDetailUpdate}
                        >수정</Button>
                        <Button 
                            variant="danger"
                            id={list.USER_NUMBER}
                            onClick={onDelete}
                        >삭제</Button>
                    </td>
                </tr>
            </Table>
        </div>
    );
}

export default ViewDetail;