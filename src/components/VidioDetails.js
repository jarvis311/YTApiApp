import React from 'react'


const VidioDetails = ({ video }) => {
    if (!video) {
        return <h1>Loading.....</h1>
    }
    const vidioSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
            
                    
        <div>
            <div className="ui embed">
                <iframe src={vidioSrc} title="vidio player" />
            </div>
            <div className='ui segment'>
                <h4 className="ui-header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VidioDetails