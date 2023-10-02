import Axios from "axios";
import { Button } from "react-bootstrap";

function Contents ({ list, viewDetail}) {
    // table에 tbody부분에 mysql과 연동을 시켜 내용을 보여줌.

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
        </tr> 
    );
}

export default Contents;