import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  // Replace 'YOUR_VIDEO_ID' with your actual video ID
  const api = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ZTMHbC0MkfQ&key=AIzaSyAIxhUKPcLFqyy-OWSrMQ2j9OSDBfBriW0';
        
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        const response = await fetch(api);
        const result = await response.json();
        // const {data}= result
        setData(result);
      data &&  console.log(data);
        // setLoading(false);
    console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <VideoPlayer videoId={'ZTMHbC0MkfQ'} />
      
    </div>
  );
}

export default App;
