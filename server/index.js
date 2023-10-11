// 기존 index파일과 충돌을 막기위해 test파일을 생성해서 서버 연결을 진행함.

// 서버와 통신이 되는지 확인 
const express = require("express"); // 웹서버 생성
const app = express(); // express 설정
const PORT = process.env.port || 8001; // 포트번호 설정
const bodyParser = require("body-parser"); // 요청 정보처리

// DB 연동시 위한 코드 
const mysql = require("mysql"); 

// cors 오류시 사용되는 코드
// cors란 교차 출처 리소스이며 현 웹페이지 도메인서 다른 웹페이지 도메인으로 리소스가 요청되는 현상 뜻합니다.
// 주로 클라이언트 localhost:3000 API는 localhost:8000이면 cors가 발생이된다. 
const cors = require("cors");

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근 가능하다
};
  
app.use(cors(corsOptions)); // 옵션을 설정함
  // app.use(cors()); // 모든 도메인에서 제한 없이 요청보내고 응답받기 가능.
  
const dbConnect = mysql.createPool({ // DB 연동시 위한 코드 
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bbs",
});
  
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
  
// Mysql내용을 화면에 보여주는 서버 API코드 
app.get("/list", (req, res) => { // DB에 있는 내용 보여주는 코드
  const userQuery = "SELECT USER_NUMBER, USER_TITLE, USER_ID, DATE_FORMAT(USERID_DATE, '%Y-%m-%d') AS USERID_DATE FROM USER;"; // 오늘 날짜 및 내용 가져오기 위해 사용됨.
    dbConnect.query(userQuery, (err, result) => {
      res.send(result);
    });
  });

app.post("/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
    
  const userQuery = "INSERT INTO USER (USER_TITLE, USER_CONTENT, USER_ID) VALUES (?, ?, '작성자');";
  dbConnect.query(userQuery, [title, content], (err, result) => {
    res.send(result);
  });
});

app.post("/detail/:idx", (req, res) => { // DB에 있는 내용 보여주는 코드
  const value = [req.params.idx];

  const userQuery = "SELECT USER_NUMBER, USER_TITLE, USER_CONTENT, USER_ID, DATE_FORMAT(USERID_DATE, '%Y-%m-%d') AS USERID_DATE FROM USER WHERE USER_NUMBER=?;"; // 오늘 날짜 및 내용 가져오기 위해 사용됨.
    dbConnect.query(userQuery, value, (err, result) => {
      res.send(result);
  });
});

app.post("/delete/:idx", (req, res) => {
  const value = [req.params.idx];

  const userQuery = "DELETE FROM USER WHERE USER_NUMBER=?;";
  dbConnect.query(userQuery, value, (err, result) => {
    res.send(result);
  });
});

  app.listen(PORT, ()=>{ // 서버와 통신이 되는지 확인 
    console.log(`running on port ${PORT}`);
});




