// // 서버와 통신이 되는지 확인 
// const express = require("express"); 
// const app = express();
// const PORT = process.env.port || 8000;
// const bodyParser = require("body-parser");

// // DB 연동시 위한 코드 
// const mysql = require("mysql");

// // cors 오류시 사용되는 코드
// // cors란 교차 출처 리소스이며 현 웹페이지 도메인서 다른 웹페이지 도메인으로 리소스가 요청되는 현상 뜻합니다.
// // 주로 클라이언트 localhost:3000 API는 localhost:8000이면 cors가 발생이된다. 
// const cors = require("cors");

// let corsOptions = {
//   origin: "*", // 출처 허용 옵션
//   credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근 가능하다
// };

// app.use(cors(corsOptions)); // 옵션을 설정함
// // app.use(cors()); // 모든 도메인에서 제한 없이 요청보내고 응답받기 가능.

// const dbConnect = mysql.createPool({ // DB 연동시 위한 코드 
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "bbs",
// });

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }))

// // Mysql내용을 화면에 보여주는 서버 API코드 
// app.get("/list", (req, res) => { // DB에 있는 내용 보여주는 코드
//   const userQuery = "SELECT USER_NUMBER, USER_TITLE, USER_ID, DATE_FORMAT(USERID_DATE, '%Y-%m-%d') AS USERID_DATE FROM USER;"; // 오늘 날짜 및 내용 가져오기 위해 사용됨.
//   dbConnect.query(userQuery, (err, result) => {
//     res.send(result);
//   });
// });

// // Mysql테이블에 내용을 추가해주는 서버 API코드
// app.post("/insert", (req, res) => { // 화면에서 DB로 내용을 넣어주는 코드
//   const title = req.body.title;
//   const content = req.body.content;
  
//   const userQuery = "INSERT INTO USER (USER_TITLE, USER_CONTENT, USER_ID) VALUES (?, ?, '작성자');"; // DB에 내용 넣기위해 작성 ? ? 부분은 나중에 넣는다는 뜻
//   dbConnect.query(userQuery, [title, content], (err, result) => {
//     res.send(result);
//   });
// });

// // Mysql테이블에 추가한 내용을 수정해주는 서버 API코드
// app.post("/update", (req, res) => { // 화면에서 DB로 내용을 넣어주고 수정을 할 수 있게 해주는 코드
//   const title = req.body.title;
//   const content = req.body.content;
  
//   const userQuery = "UPDATE USER SET USER_TITLE = ? USER_CONTENT = ? USER_UPDATE) VALUES (?,?,'작성자');"; // DB에 내용 넣고 수정을 가능하게 해줌.
//   dbConnect.query(userQuery, [title, content], (err, result) => {
//     res.send(result);
//   });
// });

// app.listen(PORT, ()=>{ // 서버와 통신이 되는지 확인 
//     console.log(`running on port ${PORT}`);
// });



