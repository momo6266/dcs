// resolvers/getVideoResource.js
const { DynamoDB } = require('aws-sdk');

const dynamoDB = new DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { resource_id } = event.arguments;

  const params = {
    TableName: 'video_resource', // Change to your DynamoDB table name
    Key: {
      resource_id,
    },
  };

  try {
    const result = await dynamoDB.get(params).promise();
    const videoResource = result.Item;

    return videoResource;
  } catch (error) {
    console.error('Error fetching video resource:', error);
    throw new Error('Internal Server Error');
  }
};
