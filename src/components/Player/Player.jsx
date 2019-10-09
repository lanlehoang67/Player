import React, { Component } from "react";
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
  pause: {
    display: 'block',
    marginRight: "10px"
  },
  playBar: {
    margin: "8px 15px 0 15px"
  },
  div: {
    margin: '0 10px 0 10px'
  },
  volume: {
      margin: '0 0 0 10px'
  },
  volumeBar:{
    margin: "7px 0 0 5px"
  },
  progressBar: {
    display: 'flex',
    width: '420px',
    height: '5px'
},
bar: {
    display: 'block',
    width: "100%",
    backgroundColor: "#FFFFFF",
    opacity: '50%',
    transition: 'width 10s ease-in'
},
soundBar: {
  display: 'flex',
    width: '60px',
    height: '5px'
}
};

class Player extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      playing: false,
      currentSongId: -1,
      currentTime: 0
    };  
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps != undefined && this.state.currentSongId != nextState.currentSongId){
      this.player.src = nextProps.songs[nextState.currentSongId].src;
    }
   
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.playing){
      this.player.pause()
    }
    else{
      this.player.play()
    }
  }
  
   
  handleClick = (e) =>{
    switch(e.target.closest('div').className){
      case "play":
        this.setState((state,props)=>{
          let currentSongId = state.currentSongId;
          if(currentSongId == -1){
            currentSongId = 0;
          }
          return {
            playing: true,
            currentSongId: currentSongId
          }
        })
      case "pause":
        this.setState({
          playing: !this.state.playing
        })
    }
  }
  render() {
    const {songs} = this.props;
    const currentSong = songs[0]
    return (
     <div style={styles.main}>
        <p style={styles.title}>{currentSong.name}</p>
        <p style={styles.artist}>{currentSong.author}</p>
        <span style={styles.description}>
          Sáng tác: {currentSong.genre} | Lượt
          nghe: {currentSong.views} | Lượt tải: {currentSong.download}
        </span>
        <div style={styles.playSection} className="play-bar">
          {this.state.playing == false && <div style={styles.play} className="play" onClick={this.handleClick}>
            <i className="fas fa-play"></i>
          </div>
          }
          {this.state.playing == true &&
          <div style={styles.pause} className="pause" onClick={this.handleClick}>
          <i className="fas fa-pause"></i>
          </div>
          }
          <div onClick={this.handleClick} className="forward">
            <i className="fas fa-step-forward"></i>
          </div>
          <div style={styles.playBar}>
          <div style={styles.progressBar} className="progress-bar">
          <audio ref={ref => this.player = ref} />

        <div style={styles.bar} className="bar"></div>
        </div>
          </div>
          <div id="start-time">00:03</div>
          <div style={styles.div} onClick={this.handleClick} className="repeat">
            <i className="fas fa-retweet"></i>
          </div>
          <div style={styles.div} onClick={this.handleClick} className="shuffle">
            <i className="fas fa-random"></i>
          </div>
          <div style={styles.volume} onClick={this.handleClick} className="volume">
            <i className="fas fa-volume-up"></i>
          </div>
          <div style={styles.volumeBar}>
          <div style={styles.soundBar}>
        <div style={styles.bar} className="sound-bar"></div>
        </div>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Player;
