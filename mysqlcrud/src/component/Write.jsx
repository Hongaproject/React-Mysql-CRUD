import Axios from "axios";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Write({ onSubmit, writeMode, onWriteMode}) {
    // 구조를 바꿔서 작성을 해보기 위해 테스트 파일 진행 중.

    const titleWrite = useRef(); // Ref를 사용하여 접근하려고 사용함.
    const contentWrite = useRef();

    const [text, setText] = useState({
        title: "",
        content: ""
    });

    const {title, content} = text;

    const onChange = (e) => {
        const {name, value} = e.target;
        setText({
            ...text,
            [name]: value
        });
    };

    const onReset = () => {
        setText("");
    }

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
            title,
            content
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        onSubmit();
    }   

    return(
        <div>
            <Form>
                <div className="mt-3 mb-3">
                    <Button onClick={() => onWriteMode(writeMode)}>뒤로가기</Button>
                </div>
                <div className="form-group mb-3">
                    <label>제목</label>
                    <input 
                        type="text" 
                        name="title"
                        value={title}
                        onChange={onChange}
                        className="form-control" 
                        placeholder="제목을 입력해주세요." 
                        ref={titleWrite}
                    /> 
                </div>
                <div class="form-group mb-3">
                    <label>내용</label>
                    <input 
                        type="text" 
                        name="content"
                        value={content}
                        onChange={onChange}
                        className="form-control" 
                        placeholder="내용을 입력해주세요." 
                        ref={contentWrite}
                    />
                </div>
                <div className="text-center">
                    <Button variant="primary" onClick={onInsert}>작성하기</Button>
                    <Button variant="warning" type="reset" onClick={onReset}>취소</Button>
                </div>
            </Form>
        </div>
    );
}

export default Write;