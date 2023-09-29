import { useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

function TestUpdate ({ list, setList, onUpdate}) {
    // 글 수정하는 컴포넌트.


    return(
        <div>
            <form>
                <Table striped bordered hover>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" />
                            {list.USER_TITLE}
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>{list.USER_ID}</td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <input type="text" />
                            {list.USER_CONTENT}
                        </td>
                    </tr>
                    <tr>
                        <div className="text-center mb-3">
                            <Button variant="secondary" onClick={onUpdate}>수정</Button>
                        </div>
                    </tr>
                </Table>
            </form>
        </div>
    );
}

export default TestUpdate;