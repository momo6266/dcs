// utils/fetchVideosByUserId.js
import { API, graphqlOperation } from 'aws-amplify';
import { listVideosByUserId } from './graphql/queries'; // Path to your GraphQL queries file

export async function fetchVideosByUserId(userId) {
  try {
    const response = await API.graphql(graphqlOperation(listVideosByUserId, { userId }));
    return response.data.listVideos.items;
  } catch (error) {
    console.error('Error fetching videos by user ID:', error);
    return [];
  }
}
