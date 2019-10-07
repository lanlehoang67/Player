import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player';
const styles = {
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  height: "1000px",
}
const songs = [
  {
  name: "Em của ngày hôm qua",
  lyrics: "Eh eh eh.. Em đang nơi nào...  Can you feel me. Can you feel me. ", 
  author: "Sơn Tùng"
  },
  {
  name: "Người Anh Em",
  lyrics: "Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em", 
  author: "Nhạc Hoa, Lời Việt: Mạnh Thắng"
  }
  ]
function App() {
  return (
    <div style={styles}>
    <Player songs={songs}></Player>
    </div>
  );
}

export default App;
