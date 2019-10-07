import React, { Component } from 'react'

const styles = {
    main: {
        display: 'inline-block',
        backgroundColor: '#03141A',
        width: '720px',
        height: '100px',
        margin: '300px 0 0 0 ',
        textAlign: 'start',
        color: 'white'
    },
    title: {
        display: 'inline-block',
        color: '#8CB01B',
        marginLeft: "15px",
        marginBottom: "7px"
    },
    artist: {
        display: 'inline-block',
        color: 'white',
        marginLeft: "15px",
        marginBottom: "7px"
    },
    description: {
        display: 'block',
        color: '#395F68',
        margin: "0 0 0 15px",
        fontSize: '15px'
    }
}

class Player extends Component {
    constructor(props){
        super(...arguments);
        this.state = {
            playing: false,
            currentSong: null
        }
    }
    render() {
        return (
            <div style={styles.main}>
                <p style={styles.title}>Người anh em</p>
                <p style={styles.artist}>Châu khải phong</p>
                <span style={styles.description}> Sáng tác: Nhạc Hoa, Lời Việt: Mạnh Thắng | Thể Loại: Nhạc Dance | Lượt nghe: 163.005 | Lượt tải: 1121</span>
                <div><i class="fas fa-pause"></i>
                </div>
                <div></div>
            </div>
        )
    }
}
export default Player;