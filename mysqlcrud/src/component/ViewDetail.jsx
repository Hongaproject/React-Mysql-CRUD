import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";

function ViewDetail ({ list, onSubmit, viewDetailUpdate, view, onView}) {
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
            <div>
            <Button onClick={() => onView(view)}>닫기</Button>
            </div>
            <Table>
                <tr>
                    <td>번호</td>
                    <td>{list.user_number}</td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>{list.user_title}</td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>{list.user_userId}</td>
                </tr>
                <tr>
                    <td>날짜</td>
                    <td>{list.user_userIdDate}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{list.user_content}</td>
                </tr>
                <tr>
                    <td>
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