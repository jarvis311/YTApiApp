import '../App.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className='item vidio-item' >
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt="dbj" />
            <div className='content'>
                <div  className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem