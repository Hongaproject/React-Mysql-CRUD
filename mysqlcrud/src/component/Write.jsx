import Axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Write () {

    const [posting, setPosting] = useState({ // 하나의 useState에 여러개 사용
        modufy: true,
        title: "",
        content: ""
    });

    const { title, content } = posting; // 값이 여러개 일 때 구조분해할당을 하여 사용한다.

    const onCreateWrite = () => { // db에 내용을 생성하는 코드
        Axios.post("http://localhost:8000/insert", {
            title, // 구조분해할당시에 이렇게 사용
            // title: posting.title, // 구조분해할당을 사용하지 않을때 사용 법 사용을 해본결과 오류가 나타남.
            content
        }) 
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err))
    };

    const onUpdate = () => { // db에 넣은 내용을 수정하는 코드
        Axios.post("http://localhost:8000/update", {
            title,
            content
        }) 
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }

    const onChange = (e) => {
        const {name, value} = e.target; // input부분에 name을 가져오고 입력값대로 value값이 생성이된다.
        setPosting({
            ...posting, // spread문법 posting부분을 복사를 하고 name과 value값을 받아옴.
            [name]: value
        });
    };

    return(
        <div>
            <Form>
                <div class="form-group mb-3">
                    <label>제목</label>
                    <input 
                        type="text" 
                        name="title"
                        value={title} 
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
                        value={posting.content} // posting안에 content값이 있어서 이렇게 사용 하지만 구조분해할당을 사용했기에 content로 해도 사용이 가능하다.
                        class="form-control" 
                        placeholder="내용을 입력해주세요." 
                        onChange={onChange}
                    />
                </div>
            </Form>
            <div className="text-center">
                <Button variant="primary" onClick={posting.modufy ? onCreateWrite : onUpdate}>작성하기</Button>
                <Button variant="warning">취소</Button>
            </div>
        </div>
    );
}

export default Write;