import React, { Component } from "react";
import Bar from "./Bar/Bar";
const styles = {
  main: {
    display: "inline-block",
    backgroundColor: "#03141A",
    width: "720px",
    height: "100px",
    margin: "300px 0 0 0 ",
    textAlign: "start",
    color: "white"
  },
  title: {
    display: "inline-block",
    color: "#8CB01B",
    marginLeft: "15px",
    marginBottom: "7px"
  },
  artist: {
    display: "inline-block",
    color: "white",
    marginLeft: "15px",
    marginBottom: "7px"
  },
  description: {
    display: "block",
    color: "#395F68",
    margin: "0 0 0 15px",
    fontSize: "15px"
  },
  playSection: {
    display: "flex",
    verticalAlign: "bottom",
    margin: "10px 0 0 15px"
  },
  play: {
    display: "block",
    marginRight: "10px"
  },
  playBar: {
    margin: "9px 15px 0 15px"
  },
  div: {
    margin: '0 10px 0 10px'
  },
  volume: {
      margin: '0 0 0 10px'
  },
  volumeBar:{
    margin: "9px 0 0 5px"
  }
};

class Player extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      playing: false,
      currentSong: null
    };
  }
  render() {
    return (
      <div style={styles.main}>
        <p style={styles.title}>Người anh em</p>
        <p style={styles.artist}>Châu khải phong</p>
        <span style={styles.description}>
          {" "}
          Sáng tác: Nhạc Hoa, Lời Việt: Mạnh Thắng | Thể Loại: Nhạc Dance | Lượt
          nghe: 163.005 | Lượt tải: 1121
        </span>
        <div style={styles.playSection} className="play-bar">
          <div style={styles.play}>
            <i class="fas fa-pause"></i>
          </div>
          <div>
            <i class="fas fa-step-forward"></i>
          </div>
          <div style={styles.playBar}>
            <Bar width="420px"></Bar>
          </div>
          <div>00:03</div>
          <div style={styles.div}>
            <i class="fas fa-retweet"></i>
          </div>
          <div style={styles.div}>
            <i class="fas fa-random"></i>
          </div>
          <div style={styles.volume}>
            <i class="fas fa-volume-up"></i>
          </div>
          <div style={styles.volumeBar}>
            <Bar width="50px"></Bar>
          </div>
        </div>
      </div>
    );
  }
}
export default Player;
