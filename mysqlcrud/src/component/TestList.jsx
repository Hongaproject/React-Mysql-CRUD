import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Axios from "axios";
import TestContents from "./TestContents";

function TestList() {
    // 구조를 바꿔서 모드를 넣어 작성 수정 등을 해보려고 테스트 파일을 만듬.

    const [contents, setContents] = useState([]); // mysql은 테이블로 되어있어 배열로 받아야함. 화면에 보여주는 역할
    const [list, setList] = useState({ 
        user_number: 0,
        user_title: "",
        user_content: "",
        user_userId: "",
        user_userIdDate: "",
    })
    const [actionMode, setActionMode] = useState({ mode: 0 }); // 모드를 적용하여 작성 및 수정 등을 하게 해줌.

        const onSubmit = () => { // mysql테이블 내용을 화면에 보여지게 해줌.
            Axios.get("http://localhost:8000/list", {})
            .then((res) => { // server -> index.js에 있는 res로 전달을 받음.
                setContents(res.data);
                setActionMode({
                    mode: 0
                });
            })
            .catch((err) => {
                console.log(err);
            })
        };
    // []에 값이 없으면 1번만 렌더링되기에 값이 불러오지지 않습니다.
    // 값을 넣어서 contents값이 수정이 될 때 마다 렌더링이 되기에 업데이트가 되는 모습을 확인 할 수 있습니다.
    
    const viewDetail = (e) => { // 제목을 클릭하면 글 내용을 볼 수 있음.
        Axios.post("http://localhost:8000/viewdetail", {
            number: e.target.id
        })
        .then((res) => {
            const {data} = res;
            if(res.data.length > 0){
                setList({
                    ...list,
                    user_number: data.USER_NUMBER, // Key는 대문자로 되어 있어서 대문자 사용
                    user_title: data.USER_TITLE,
                    user_content: data.USER_CONTENT,
                    user_userId: data.USER_ID,
                    user_userIdDate: data.USERID_DATE,
                });
                setActionMode({ // 모드변경을 통해 상세보기를 할 수 있음.
                    ...actionMode,
                    mode: 1
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const viewDetailUpdate = (e) => { // 글 수정을 위해 모드 변경 하기 위한 함수
        Axios.post("http://localhost:8000/viewdetail", {
            number: e.target.id
        })
        .then((res) => {
            const {data} = res;
            if(res.data.length > 0){
                setList({
                    ...list,
                    user_number: data.USER_NUMBER, // Key는 대문자로 되어 있어서 대문자 사용
                    user_title: data.USER_TITLE,
                    user_content: data.USER_CONTENT,
                    user_userId: data.USER_ID,
                    user_userIdDate: data.USERID_DATE,
                });
                setActionMode({ // 모드변경을 통해 상세보기를 할 수 있음.
                    ...actionMode,
                    mode: 2
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    const onUpdate = () => { // db에 넣은 내용을 수정하는 코드
        Axios.post("http://localhost:8000/update", {
            list: list,
        }) 
        .then(() => {
            // eslint-disable-next-line no-undef
            onSubmit();
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        onSubmit();
    }, []);

    return(
        //
        <div>
            <Table striped bordered hover>
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
                        contents.map((list) => {
                            return(
                                <TestContents
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
                <Button variant="secondary">수정하기</Button>
                <Button variant="danger">삭제하기</Button>
            </div>
        </div>
    );
}

export default TestList;