import React, { useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listVideoResources } from './graphql/queries';
import './VideoDisplay.css'; // Import your custom CSS file

function VideoDisplay() {
  const [videos, setVideos] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    async function fetchVideos() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUserId(user.attributes.sub);

        const response = await API.graphql(graphqlOperation(listVideoResources, {
          filter: {
            UserID: { eq: user.attributes.sub }
          }
        }));

        console.log('API Response:', response);
        const videoResources = response.data.listVideoResources.items;
        setVideos(videoResources);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchVideos();
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="video-display-container">
      <h2>Video Resources</h2>
      <button onClick={handleSignOut}>Sign Out</button>
      <div className="video-list">
        {videos.map(video => (
          <div key={video.resource_id} className="video-item">
            <video controls>
              <source src={video.objectURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-event-time">{video.EventTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoDisplay;
