// 서버와 통신이 되는지 확인 
const express = require("express"); 
const app = express();
const PORT = process.env.port || 8000;

// DB 연동시 위한 코드 
const mysql = require("mysql");

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