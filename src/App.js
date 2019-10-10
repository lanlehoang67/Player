import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player';
import EmCuaNgayHomQua from './musics/em_cua_ngay_hom_qua.mp3'
import Mabataki from './musics/mabataki.mp3'
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
  author: "Sơn Tùng",
  genre: "Nhạc Dance",
  views: "163.005",
  download: "1121",
  src: EmCuaNgayHomQua
  },
  {
  name: "Mabataki",
  lyrics: "Shiawase to wa hoshi ga furu yoru to, mabushii asa ga", 
  author: "Back number",
  genre: "Nhạc Nhật",
  views: "154.225",
  download: "1650",
  src: Mabataki
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
