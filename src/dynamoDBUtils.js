import { API, graphqlOperation } from 'aws-amplify';
import { listVideos } from './graphql/queries'; // Update with your actual query file

// Function to fetch video keys from DynamoDB
const getVideoKeysFromDynamoDB = async (userId) => {
  try {
    // Fetch the list of videos from DynamoDB
    const response = await API.graphql(graphqlOperation(listVideos, {
      filter: {
        userId: {
          eq: userId
        }
      }
    }));

    // Extract and return the video keys
    const videos = response.data.listVideos.items;
    const videoKeys = videos.map(video => video.videoKey);

    return videoKeys;
  } catch (error) {
    console.error('Error fetching video keys:', error);
    return [];
  }
};

export { getVideoKeysFromDynamoDB };
