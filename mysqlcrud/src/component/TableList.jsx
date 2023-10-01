import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Contents from "./Contents";

function TableList({contents, list, onSubmit, viewDetail, viewDetailUpdate}) {
    // 구조를 바꿔서 모드를 넣어 작성 수정 등을 해보려고 테스트 파일을 만듬.

    useEffect(() => {
        onSubmit();
    }, [contents]);

    return(
        //
        <div>
            <Table striped bordered hover>
                <col width="10%"/>
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
                        <th>수정/삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // eslint-disable-next-line array-callback-return
                        contents.map((detail) => {
                            return(
                                <Contents
                                    detail={detail}
                                    list={list}
                                    onSubmit={onSubmit}
                                    viewDetail={viewDetail}
                                    viewDetailUpdate={viewDetailUpdate}
                                />
                            )
                        })}
                </tbody>
            </Table>
            <div className="text-center mb-3">
                <Button variant="success">글쓰기</Button>
            </div>
        </div>
    );
}

export default TableList;