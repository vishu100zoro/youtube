import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css'

function App() {
  // Replace 'YOUR_VIDEO_ID' with your actual video ID
  const papi='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=AIzaSyAIxhUKPcLFqyy-OWSrMQ2j9OSDBfBriW0'

  // const api = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ZTMHbC0MkfQ&key=AIzaSyAIxhUKPcLFqyy-OWSrMQ2j9OSDBfBriW0';
        
  const [data, setData] = useState(null);
  const [vid, setVid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        setLoading(true);
        const response = await fetch(papi);
        const result = await response.json();

        setData(result);
        console.log(data.items);
        setVid(data?.items[0]?.id);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
     { !loading && <VideoPlayer videoId={vid} />}
      
      <div>
      {data?.items.map((item) => (
          <div  onClick={()=>setVid(item?.id)} key={item?.id}>{item.snippet.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
