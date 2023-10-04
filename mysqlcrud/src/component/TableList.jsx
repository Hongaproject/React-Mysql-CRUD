import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Contents from "./Contents";
import Write from "./Write";

function TableList({contents, onSubmit, viewDetail }) {
    // 구조를 바꿔서 모드를 넣어 작성 수정 등을 해보려고 테스트 파일을 만듬.

    useEffect(() => {
        onSubmit();
    }, [contents]);

    const [writeMode, SetWriteMode] = useState(false);

    const onWriteMode = () => {
        SetWriteMode(!writeMode);
    }

    return(
        //
        <div>
            <Table striped bordered hover>
                <col width="10%"/>
                <col width="10%"/>
                <col width="10%"/>
                <col width="10%"/>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // eslint-disable-next-line array-callback-return
                        contents.map((list) => {
                            return(
                                <Contents
                                    list={list}
                                    key={list.USER_NUMBER}
                                    onSubmit={onSubmit}
                                    viewDetail={viewDetail}
                                />
                            )
                        })}
                </tbody>
            </Table>
            <div className="text-center mb-3">
                <Button variant="success" onClick={onWriteMode}>글쓰기</Button>
                {writeMode === true ? (<Write onSubmit={onSubmit} writeMode={writeMode} onWriteMode={onWriteMode}/>) : null}
            </div>
        </div>
    );
}

export default TableList;