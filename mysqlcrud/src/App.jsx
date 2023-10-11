import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import BoardList from './router/BoardList';
import BoardWrite from './router/BoardWrite';
import BoardDetail from './router/BoardDetail';
import BoardUpdate from './router/BoardUpdate';

function App() {
  // React + Mysql + Node js를 사용하여 게시판 만들기
  // bootstrap, react-router-dom, axios를 사용함.
  // 여기서는 Router을 사용해서 파일 이동을 시켜줌.

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/detail/:idx" element={<BoardDetail />} />
          <Route path="/update/:idx" element={<BoardUpdate />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
