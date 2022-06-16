import React, { useEffect, useState } from 'react';
import './App.css';
import useVideo from './components/Hooks/useVideo';
import SearchBar from './components/SearchBar';
import VidioDetails from './components/VidioDetails';
import VidioList from './components/VidioList';


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null) // --> All about the current selectrd the vidio.. (selection)
  const [videos,search] = useVideo('python programming')
  

  useEffect(() => {
    setSelectedVideo(videos[0]) // --> (Selection)
  }, [videos])
  
  


  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Search any video</h1>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className="ui row">
          <div className='eleven wide column'>
            <VidioDetails video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VidioList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
          </div>

        </div>
      </div>

    </div>
  )
  }

export default App

// .........................................................

// redeployy app ---> vercel --prod