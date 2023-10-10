import { Button, Form } from "react-bootstrap";
import Axios from "axios";
import { useEffect, useState } from "react";

function Update ({ list, updating, onUpdating }) {
    // 글 수정하는 컴포넌트.

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

    const onUpdate =  (e) => { // db에 넣은 내용을 수정하는 코드
        Axios.post("http://localhost:8000/update", {
            number: e.target.id,
            title: text.title,
            content: text.content
        }) 
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    

    return(
        <div>
            <div className="mt-1 mb-1">
                <Button onClick={()=> onUpdating(updating)}>닫기</Button>
            </div>
            <Form>
                <div>
                    제목: 
                    <input type="text" name="title" value={title} onChange={onChange} />
                </div>
                <div>
                    작성자: {list.USER_ID}
                </div>
                <div>
                    내용: 
                    <input type="text" name="content" value={content} onChange={onChange} />
                </div>
                <div className="mt-1 mb-1">
                    <Button variant="secondary" onClick={onUpdate}>수정하기</Button>
                </div>
            </Form>
        </div>
    );
}

export default Update;