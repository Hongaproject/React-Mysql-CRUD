import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from './component/TableList';
import Write from './component/Write';

function App() {
  return (
    <div>
      Mysql 사용해서 게시판 만들기.
      bootstrap을 사용해서 게시판 디자인을 함.
      <TableList></TableList>
      <Write></Write>
    </div>
  );
}

export default App;
