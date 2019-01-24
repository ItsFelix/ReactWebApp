import React, { Component } from 'react';
import YouTube from 'react-youtube';
import '../Styles/App.css';
import StyleVideoGallery from '../Styles/videoGallery.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

class VideoGallery extends Component {
    render() {
        const YTopts = {
            height: '250vh',
            width: '90%',
            playerVars: {
            autoplay: 0
        }
    }
        
    return (
        <div className="videoSection">
            <h1>Video</h1>
            <hr/>
            <div className="videos">
                <YouTube
                    className="video"
                    videoId="0Q85KsZ18Fo"
                    opts={YTopts}
                    onReady={this._onReady}
                />
                <YouTube
                    className="video"
                    videoId="XiD_2uMtxHE"
                    opts={YTopts}
                    onReady={this._onReady}
                />
            </div>
        </div>
        );
    }
} 

export default VideoGallery;