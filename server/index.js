// 서버와 통신이 되는지 확인 
const express = require("express"); 
const app = express();
const PORT = process.env.port || 8000;

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

app.get("/", (req, res) => { // 서버와 통신이 되는지 확인 
  //console.log("chech."); // 서버와 통신이 되는지 확인 
  
  const sqlQuery = "INSERT INTO chech (test) VALUES (1)"; // DB 연동시 위한 코드 
  dbConnect.query(sqlQuery, (err, result) => {
    console.log(err);
    res.send("success!");
  });
});

app.listen(PORT, ()=>{ // 서버와 통신이 되는지 확인 
    console.log(`running on port ${PORT}`);
});