import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from './component/TableList';
import Write from './component/Write';
import TestList from './component/TestList';
import TestWrite from './component/TestWrite';

function App() {
  return (
    <div>
      Mysql 사용해서 게시판 만들기.
      bootstrap을 사용해서 게시판 디자인을 함.
      {/* <TableList></TableList>
      <Write></Write> */}

      {/* 오류 발생 및 구조 변경을 위해 리뉴얼 작업 중 */}
      <TestList />
      <TestWrite />

    </div>
  );
}

export default App;
