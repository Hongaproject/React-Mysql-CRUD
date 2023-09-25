import Axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function TestWrite({ onSubmit }) {
    // 구조를 바꿔서 작성을 해보기 위해 테스트 파일 진행 중.

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
                    /> 
                </div>
                <div class="form-group mb-3">
                    <label>내용</label>
                    <input 
                        type="textarea" 
                        name="content"
                        class="form-control" 
                        placeholder="내용을 입력해주세요." 
                    />
                </div>
            </Form>
            <div className="text-center">
                <Button variant="primary">작성하기</Button>
                <Button variant="warning">취소</Button>
            </div>
        </div>
    );
}

export default TestWrite;