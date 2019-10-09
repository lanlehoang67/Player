import React from 'react'



class Bar extends React.PureComponent {
    constructor(props){
        super(...arguments);
        this.state = {
            playing: false,
            currentSong: null,
        }
    }
    componentDidUpdate(prevProps, prevState){
            const {playing, song} = this.props;
            if(song != null){
                if(prevState.currentSong != new Audio(prevProps.song.src)){
                    var track = new Audio(song.src);
                this.setState({
                    playing: playing,
                    currentSong: track
                })
                }
            }
            
            
        
       
        
    }
    render(){
        const {playing, currentSong} = this.state;
        if(currentSong != null){
            if(playing){
                currentSong.play()
            }
            else{
                currentSong.pause()
            }
        }   
    const styles = {
        progressBar: {
            display: 'flex',
            width: this.props.width,
            height: '5px'
        },
        bar: {
            display: 'block',
            width: "100%",
            backgroundColor: "#FFFFFF",
            opacity: '50%',
            transition: 'width 10s ease-in'
        }
    }
    return (
        <div style={styles.progressBar} className="progress-bar">
        <div style={styles.bar} className="bar"></div>
        </div>
    )
    }
}

export default Bar
