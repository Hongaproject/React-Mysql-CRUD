import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function BoardUpdate () {

    const navigate = useNavigate();
    const { idx } = useParams();
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

    useEffect(() => {
        const getBoardUpdate = () => {
            Axios.post(`http://localhost:8001/detail/${idx}`, {})
            .then((res) => {
                setText(res.data[0]);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        };
        getBoardUpdate();
        console.log(idx);
    }, []);

    const onUpdate = () => {
        Axios.put(`http://localhost:8001/update/${idx}`,{
            title,
            content
        })
        .then(res => {
            console.log(res.data)
            alert("글 수정이 완료되었습니다.")
            document.location.href = '/'
          })
        .catch(function(error){
           console.log(error);
        })
    }

    return(
        <div>
            <form>
                <div>
                    <h3>게시판 수정 페이지 입니다.</h3>
                    <button onClick={()=> navigate("/")}>Home</button>
                    <button onClick={onReset}>취소</button>
                </div>
            </form>
            <div>
                <label>제목 : </label>
                <input type="text" name="title" value={title} onChange={onChange} placeholder="제목을 입력해주세요." />
            </div>
            <div>
                <label>내용 : </label>
                <input type="text" name="content" value={content} onChange={onChange} placeholder="내용을 입력해주세요." />
            </div>
            <button onClick={onUpdate}>수정</button>
        </div>
    );
}

export default BoardUpdate;