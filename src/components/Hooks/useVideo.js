import React, { useEffect, useState } from 'react'
import Youtube from '../../Apis/Youtube'

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]) // --->  Managing the list of vidios... (vidio) ---> Output

  useEffect(() => {
    search(defaultSearchTerm)    // --> list of vidio and currenty selected vidio at compoents is render..  (vidio) --->Input
  }, [defaultSearchTerm])

    
  const search = async (term) => {
    const response = await Youtube.get('/search', {  // --> make request to the Youtune api and response back.. (vidio) --> Output
      params: {
        q: term
      }
    });
    setVideos(response.data.items)

}

  return [videos, search];
}

export default useVideo