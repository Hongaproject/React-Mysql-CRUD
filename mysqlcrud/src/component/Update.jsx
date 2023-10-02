import { Button } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";

function Update ({ list, onSubmit, update, onUpdating }) {
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

    const onUpdate = (e) => { // db에 넣은 내용을 수정하는 코드
        Axios.post("http://localhost:8000/update", {
            number: e.target.id,
            title,
            content,
        }) 
        .then(() => {
            setText({
                title: "",
                content: ""
            })
        })
        .catch(err => console.log(err))
        onSubmit();
    }

    return(
        <div>
            <div className="mt-1 mb-1">
                <Button onClick={()=> onUpdating(update)}>닫기</Button>
            </div>
            <form>
                <div>
                    제목: 
                    <input type="text" name="title" value={title} onChange={onChange}/>
                </div>
                <div>
                    작성자: {list.USER_ID}
                </div>
                <div>
                    내용: 
                    <input type="text" name="content" value={content} onChange={onChange}/>
                </div>
                <div className="mt-1 mb-1">
                    <Button variant="secondary" onClick={onUpdate}>수정하기</Button>
                </div>
            </form>
        </div>
    );
}

export default Update;