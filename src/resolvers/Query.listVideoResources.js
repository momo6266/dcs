// resolvers/Query.listVideoResources.js
const { DynamoDB } = require('aws-sdk');
const dynamoDB = new DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { userId } = event.arguments;

  const params = {
    TableName: 'VideoResource',
    FilterExpression: '#UserID = :userId',
    ExpressionAttributeNames: {
      '#UserID': 'UserID',
    },
    ExpressionAttributeValues: {
      ':userId': userId,
    },
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    const videoResources = result.Items;

    return {
      items: videoResources,
    };
  } catch (error) {
    console.error('Error listing videos by user ID:', error);
    throw new Error('Internal Server Error');
  }
};
