import styled from "styled-components";

const PageUl = styled.div`
    display: flex;
    list-style: none;
    margin-left: 5px;
`
const PageLi = styled.div`
    padding: 0px 10px;
    border: 1px solid;
`
const PageSpan = styled.div`
    cursor: pointer;
`

function Pagination({ postsPerPage, totalPosts, setCurrentPage }) {

const pageNumbers = [];
    // 총 페이지 넘버 수를 계산한 뒤 웹 페이지에서 보여주기 위하여, 
    // 전체 포스트 갯수를 페이지 당 포스트 갯수로 나눈 값으로 배열을 만든 것입니다.
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

    return(
        <div>
            <PageUl>
                {pageNumbers.map((number) => (
                <PageLi key={number}>
                    <PageSpan onClick={() => setCurrentPage(number)}>
                    {number}
                    </PageSpan>
                </PageLi>
                ))}
            </PageUl>
      </div>
    );
}

export default Pagination;