import Axios from "axios";

function TestContents ({ list, onSubmit, viewDetail, viewDetailUpdate }) {
    // table에 tbody부분에 mysql과 연동을 시켜 내용을 보여줌.

    const onDelete = (e) => { //삭제시 모드변경이 필요가 없기에 여기에 생성을해서 사용.
        Axios.post("http://localhost:8000/viewdetail", {
            number: e.target.id
        })
        .then(() => {
            onSubmit();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        // 번호, 제목, 작성자, 작성일
        <tr>
            <td>{list.USER_NUMBER}</td>
            <td>
                <a href="#" id={list.USER_NUMBER} onClick={viewDetail}>
                    {list.USER_TITLE}
                </a>
            </td>
            <td>{list.USER_ID}</td>
            <td>{list.USERID_DATE}</td>
            <td >
                <input
                    type="button"
                    value="수정"
                    id={list.USER_NUMBER}
                    onClick={viewDetailUpdate}
                ></input>
                <input
                    type="button"
                    value="삭제"
                    id={list.USER_NUMBER}
                    onClick={onDelete}
                ></input>
            </td>
        </tr> 
    );
}

export default TestContents;