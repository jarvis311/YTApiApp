import React from 'react'
import VideoItem from './VideoItem'

const VidioList = ({videos, onVideoSelect}) => {
   const render = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video = {video} onVideoSelect={onVideoSelect}/>
    })
  return (
    <div className='ui relaxed divided list'>
        {render}
    </div>
  )
}

export default VidioList