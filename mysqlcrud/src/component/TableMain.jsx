import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from './TableList';
import { useState } from "react";
import Axios from "axios";

function TableMain() {
  // 모드를 사용하려면 함수를 사용하여 props를 이용해서 전달해줘야한다.

    const [contents, setContents] = useState([]); // mysql은 테이블로 되어있어 배열로 받아야함. 화면에 보여주는 역할
    const [list, setList] = useState({ // list를 통해 글 및 수정시에 도움을 줌 
        user_number: 0,
        user_title: "",
        user_content: "",
        user_userId: "",
        user_userIdDate: "",
    })

    // get과 post차이는 서버에서 데이터를 받아 올 때 사용이 됨. get은 조회 post는 수정 및 생성 역할을 함.
        const onSubmit = () => { // mysql테이블 내용을 화면에 보여지게 해줌.
            Axios.get("http://localhost:8000/list", {})
            .then((res) => { // server -> index.js에 있는 res로 전달을 받음.
                setContents(res.data);
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
                setList({ // list로 생성해놓은 부분을 통해 data를 받아옴.
                    ...list,
                    user_number: data.USER_NUMBER, // Key는 대문자로 되어 있어서 대문자 사용
                    user_title: data.USER_TITLE,
                    user_content: data.USER_CONTENT,
                    user_userId: data.USER_ID,
                    user_userIdDate: data.USERID_DATE,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <TableList
                contents={contents}
                onSubmit={onSubmit}
                viewDetail={viewDetail}
            >
            </TableList>
        </div>
    );
} 

export default TableMain;
