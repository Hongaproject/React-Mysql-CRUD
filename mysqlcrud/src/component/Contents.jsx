
function Contents ({ number, title, userId, userIdDate }) {
    // table에 tbody부분에 mysql과 연동을 시켜 내용을 보여줌.

    return(
        // 번호, 제목, 작성자, 작성일
            <tr>
                <td><input type="checkbox" /></td>
                <td>{number}</td>
                <td>{title}</td>
                <td>{userId}</td>
                <td>{userIdDate}</td>
            </tr>
    );
}

export default Contents;