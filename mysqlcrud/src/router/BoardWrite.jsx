import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function BoardWrite () {

    const navigate = useNavigate();

    const [text, setText] = useState({
        title: "",
        content: ""
    });

    const { title, content } = text; 

    const onChange = (e) => {
        const { name, value } = e.target; 
        setText({
            ...text,
            [name]: value
        });
    };

    const onReset = () => {
        setText("");
    }

    const onWrite = () => {
        Axios.post("http://localhost:8001/insert", {
            title,
            content
        })
        .then((res) => {
            console.log(res);
            alert("글 작성이 완료되었습니다.")
            document.location.href = '/'
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <div>
                <button onClick={()=> navigate("/")}>Home</button>
            </div>
            게시판 작성 페이지 입니다.
            <div>
                <label>제목 : </label>
                <input type="text" name="title" value={title} onChange={onChange} placeholder="제목을 입력해주세요." />
            </div>
            <div>
                <label>내용 : </label>
                <input type="text" name="content" value={content} onChange={onChange} placeholder="내용을 입력해주세요." />
            </div>
            <div>
                <button onClick={onWrite}>작성하기</button>
                <form>
                    <button onClick={onReset}>취소</button>
                </form>
            </div>
        </div>
    );
}

export default BoardWrite;