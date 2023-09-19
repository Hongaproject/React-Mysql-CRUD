
function Contents ({ User }) {
    // table에 tbody부분에 mysql과 연동을 시켜 내용을 보여줌.
    
    const {number, title, userId, userIdDate} = User;

    return(
        // 번호, 제목, 작성자, 작성일 
        <tr>
            <td><input type="checkbox" /></td>
            <td>{number}</td>
            <td>{title}</td>
            <td>{userId}</td>
            <td>{userIdDate}</td>
            {/* <td>{User.USER_NUMBER}</td> 
            <td>{User.USER_TITLE}</td>
            <td>{User.USER_ID}</td>
            <td>{User.USERID_DATE}</td> */}
        </tr>
    );
}

export default Contents;