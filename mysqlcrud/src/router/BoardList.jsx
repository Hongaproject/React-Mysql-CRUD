import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import BoardContent from "./BoardContent";
import Pagination from "./Pagination";

function BoardMain () {

    const [boardList, setBoardList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10); // 총 한 페이지서 10개의 데이터를 보여준다.

    useEffect(() => {
        const getBoardList = async () => {
                await Axios.get("http://localhost:8001/list", {})
                .then((res) => {
                    setBoardList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        };
        getBoardList();
    }, [boardList]);

    const LastNum = currentPage * postsPerPage; // 1~10 11~20 이런식으로 보여주기 위해 선언했습니다.
    const FirstNum = LastNum - postsPerPage; // 1~10 11~20 이런식으로 보여주기 위해 선언했습니다.
    const totalPosts = (list) => { // 함수를 통해 배열 데이터를 slice해서 함수로 분할해 줍니다.
      let totalPosts = 0;
      totalPosts = list.slice(FirstNum, LastNum);
      return totalPosts;
    };

    // Pagination 부분에 페이지당 포스트 수, 전체 포스트 갯수
    // 사용자가 선택한 페이지 넘버에 따라, currentPage 의 값이 변경되도록 구현할 것입니다. 
    // 예를 들어 사용자가 3번을 선택하면, currentPage 상태값을 
    // 사용한 LastNum, FirstNum 변수의 값도 변경되면서 분할되는 데이터들도 달라지게 됨.
    
    return(
        <div>
            <BoardContent boardList={totalPosts(boardList)}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={boardList.length}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default BoardMain;