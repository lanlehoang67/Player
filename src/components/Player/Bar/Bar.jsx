import React from 'react'



function Bar(props) {
    const styles = {
        progressBar: {
            display: 'flex',
            width: props.width,
            height: '5px'
        },
        bar: {
            display: 'block',
            width: "100%",
            backgroundColor: "#FFFFFF",
            opacity: '50%'
        }
    }
    return (
        <div style={styles.progressBar} className="progress-bar">
        <div className="dot">
        </div>
        <div style={styles.bar} className="bar"></div>
        </div>
    )
}

export default Bar
