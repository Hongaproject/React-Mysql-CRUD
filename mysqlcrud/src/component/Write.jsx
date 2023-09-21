import Axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Write () {

    const [posting, setPosting] = useState({
        modify: false,
        title: "",
        content: ""
    });

    const onChange = (e) => {
        const {name, value} = e.target;
        setPosting({
            [name]: value
        })
    }

    const createWrite = () => {
        Axios.post("http://localhost:8000/insert", {
            title: posting.title,
            content: posting.content
        }) 
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err))
    };

    const update = () => {
        Axios.post("http://localhost:8000/update", {
            title: posting.title,
            content: posting.content
        }) 
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Form>
                <div class="form-group mb-3">
                    <label>제목</label>
                    <input 
                        type="text" 
                        name="title"
                        value={posting.title}
                        class="form-control" 
                        placeholder="제목을 입력해주세요." 
                        onChange={onChange}
                    /> 
                </div>
                <div class="form-group mb-3">
                    <label>내용</label>
                    <input 
                        type="textarea" 
                        name="content"
                        value={posting.content}
                        class="form-control" 
                        placeholder="내용을 입력해주세요." 
                        onChange={onChange}
                    />
                </div>
            </Form>
            <div className="text-center">
                <Button variant="primary" onClick={posting.modify ? createWrite : update}>작성하기</Button>
                <Button variant="secondary">취소</Button>
            </div>
        </div>
    );
}

export default Write;