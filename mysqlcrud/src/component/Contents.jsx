import Axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ViewDetail from "./ViewDetail";

function Contents ({ list, onSubmit, viewDetailUpdate }) {
    // table에 tbody부분에 mysql과 연동을 시켜 내용을 보여줌.

    const [view, setView] = useState(false);

    const onView = () => {
        setView(!view);
    }

    return(
        // 번호, 제목, 작성자, 작성일
        <tr>
            <td>{list.USER_NUMBER}</td>
            <td>
                <button id={list.USER_NUMBER} onClick={onView}>{list.USER_TITLE}</button>
                {view === true ? ( <ViewDetail list={list} view={view} onView={onView} onSubmit={onSubmit} viewDetailUpdate={viewDetailUpdate} /> ) : null}
            </td>
            <td>{list.USER_ID}</td>
            <td>{list.USERID_DATE}</td>
        </tr> 
    );
}

export default Contents;