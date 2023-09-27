import Axios from "axios";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function TestWrite({ onSubmit }) {
    // 구조를 바꿔서 작성을 해보기 위해 테스트 파일 진행 중.

    const titleWrite = useRef(); // Ref를 사용하여 접근하려고 사용함.
    const contentWrite = useRef();

    const onInsert = () => {
        if(titleWrite.current.value === "" || titleWrite.current.value === undefined){
            alert("제목을 입력해주세요.");
            titleWrite.current.focus();
            return false;
        }
        if(contentWrite.current.value === "" || contentWrite.current.value === undefined){
            alert("내용을 입력해주세요.");
            contentWrite.current.focus();
            return false;
        }

        Axios.post("http://localhost:8000/insert", {
            title: titleWrite.current.value,
            content: contentWrite.current.value,
        })
        .then(() => {
            onSubmit();
            titleWrite.current.value = "";
            contentWrite.current.value = "";
        })
        .catch((err) => {
            console.log(err);
        })
    }   

    return(
        <div>
            <Form>
                <div class="form-group mb-3">
                    <label>제목</label>
                    <input 
                        type="text" 
                        name="title"
                        class="form-control" 
                        placeholder="제목을 입력해주세요." 
                        ref={titleWrite}
                    /> 
                </div>
                <div class="form-group mb-3">
                    <label>내용</label>
                    <input 
                        type="text" 
                        name="content"
                        class="form-control" 
                        placeholder="내용을 입력해주세요." 
                        ref={contentWrite}
                    />
                </div>
            </Form>
            <div className="text-center">
                <Button variant="primary" onClick={onInsert}>작성하기</Button>
                <Button variant="warning" type="reset">취소</Button>
            </div>
        </div>
    );
}

export default TestWrite;